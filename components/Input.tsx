import { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type InputProps = {

} & TextInputProps;

export const Input = forwardRef<TextInput, InputProps>(({ ...props }, ref) => {
    return <TextInput ref={ref} {...props} />
})

Input.displayName = "Input"