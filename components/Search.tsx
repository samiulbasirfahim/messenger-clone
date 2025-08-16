import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

type ButtonProps = {} & TextInputProps;

export const Search = React.forwardRef<TextInput, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <View className="relative">
      <TextInput
        ref={ref}
        className={`items-center rounded-[28px] p-4`}
        {...props}
      />
    </View>
  );
});
