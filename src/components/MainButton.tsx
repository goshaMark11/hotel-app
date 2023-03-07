import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const MainView = styled.button`
  background: linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  height: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  width: 100%;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);;
  }
`

type Props = {
  title: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const MainButton: FC<Props> = ({ title, type = 'button' }) => {
  return (
    <MainView type={type} onClick={() => { }}>
      {title}
    </MainView>
  );
};