from fastapi import APIRouter, UploadFile, File, HTTPException
import requests
from fastapi.responses import JSONResponse
from PIL import Image
import io
from ..config import settings


router = APIRouter(
    prefix="/food",
    tags=['Foods AI Model']
)


def compress_image(image_bytes, max_size_mb=1):
    img = Image.open(io.BytesIO(image_bytes))

    if img.mode == "RGBA":
        img = img.convert("RGB")

    quality = 95
    output = io.BytesIO()

    while quality > 30:
        output.seek(0)
        output.truncate(0)
        img.save(output, format="JPEG", quality=quality, optimize=True)
        if len(output.getvalue()) <= max_size_mb * 1024 * 1024:
            break
        quality -= 5

    return output.getvalue()
 

@router.post("/analyze_image/")
async def analyze_image(image: UploadFile = File(...)):
    headers = {"Authorization": f"Api-Key {settings.api_key}", "Accept": "application/json"}

    try:
        image_bytes = await image.read()

        if len(image_bytes) > 1024 * 1024:
            print(f"Original image size: {len(image_bytes) / (1024 * 1024):.2f} MB")
            image_bytes = compress_image(image_bytes)
            print(f"Compressed image size: {len(image_bytes) / (1024 * 1024):.2f} MB")

        files = {"image": (image.filename, image_bytes, "image/jpeg")}

        response = requests.post(
            settings.api_url, headers=headers, files=files, allow_redirects=True
        )

        response.raise_for_status()

        return JSONResponse(content={"data": response.json()})

    except requests.HTTPError as e:
        raise HTTPException(
            status_code=response.status_code, detail=f"API request failed: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred while processing the image: {str(e)}",
        )



