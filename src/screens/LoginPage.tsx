import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import { Input } from '../components/Input/Input';
import { MainButton } from '../components/MainButton';
import { LoginFormValues } from '../components/Input/types/LoginFormValues';
import { emailRegexp, passwordRegexp } from '../shared/validation/regexp';
import { ValidationErrors } from '../shared/validation/validation-errors';
import { auth } from '../services/auth/auth-service';
import { AppCookies } from '../services/auth/enums/app-cookies';

const MainView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/login-back.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
  }
`

const LoginView = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 32px;
  max-width: 409px;
  width: 100%;
  background: #FFFFFF;
  padding: 32px;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #424242;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SubmitButtonWrapper = styled.div`
  margin-top: 8px;
`

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required(ValidationErrors.MANDATORY_FIELD)
    .matches(emailRegexp, ValidationErrors.INVALID_EMAIL),
  password: yup
    .string()
    .trim()
    .required(ValidationErrors.MANDATORY_FIELD)
    .matches(passwordRegexp, ValidationErrors.PASSWORD_INVALID_FORMAT)
    .min(8, ValidationErrors.PASSWORD_LENGTH),
}).required();

export const LoginPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: yupResolver(schema), defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data

    const { AccessToken } = auth(email, password)
    Cookies.set(AppCookies.ACCESS_TOKEN, AccessToken, { expires: 30 })
    navigate('/main')
  }

  return (
    <MainView>
      <LoginView>
        <Title>Simple Hotel Check</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input fieldName='email' title='Логин' register={register} errors={errors} />
          <Input fieldName='password' title='Пароль' inputType='password' register={register} errors={errors} />

          <SubmitButtonWrapper>
            <MainButton type='submit' title='Войти' />
          </SubmitButtonWrapper>
        </Form>
      </LoginView>
    </MainView>
  );
};