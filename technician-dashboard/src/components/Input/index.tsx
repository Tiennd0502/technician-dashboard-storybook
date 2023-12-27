import { forwardRef, memo } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Component(
  { type = 'text', error, label, ...props },
  ref,
) {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontWeight='semiBold'>{label}</FormLabel>
      <ChakraInput
        ref={ref}
        type={type}
        isInvalid={!!error}
        transition='all .5s ease'
        _focusVisible={{
          outline: 'none',
        }}
        {...props}
      />

      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
});

export default memo(Input);
