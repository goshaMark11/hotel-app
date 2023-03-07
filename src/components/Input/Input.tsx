import { FC, HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { MainView, Label, StyledInput, ErrorLabel } from './components';

type Props = {
  title: string
  register: UseFormRegister<any>
  fieldName: string
  errors: any
  inputType?: HTMLInputTypeAttribute
  boldLabel?: boolean
  pattern?: string
  minDate?: string
}

export const Input: FC<Props> = ({ title, inputType = 'text', register, fieldName, errors, boldLabel, pattern, minDate }) => {
  const errorMessage = errors[fieldName]?.message
  const inputId = `${title}-${fieldName}-input`

  return (
    <MainView isError={!!errorMessage}>
      <Label htmlFor={inputId} boldLabel={boldLabel}>{title}</Label>

      <StyledInput id={inputId} {...register(fieldName)} type={inputType} pattern={pattern} min={minDate} />

      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </MainView>
  );
};