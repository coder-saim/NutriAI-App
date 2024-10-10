import { TextInputProps, TouchableOpacityProps } from "react-native";


declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}



declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}


declare interface RadioProps {
  options: Array<{ label: string; value: string}>;
  checkedValue: string;
  onChange: (value: string) => void;



interface OtpVerificationProps {
  email: string; 
  onVerify: (otp: number) => void; 
  otpLength?: number; 
  timerDuration?: number; 
}