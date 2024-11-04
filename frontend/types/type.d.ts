import { TextInputProps, TouchableOpacityProps } from "react-native";


declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  loading?: boolean;
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
  labelOn?: boolean;
}


declare interface RadioProps {
  options: Array<{ label: string; value: string}>;
  checkedValue: string;
  onChange: (value: string) => void;
}


declare interface OtpVerificationProps {
  email: string; 
  onVerify: (otp: number) => void; 
  otpLength?: number; 
  timerDuration?: number; 
  loading?: boolean;
}


declare interface Meal {
  name: string;
  protein: string;
  calories: string;
  fat: string;
  carbs: string;
};