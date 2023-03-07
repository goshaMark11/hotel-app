import styled from 'styled-components';

export const MainView = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
`

export const Logo = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #424242;
  cursor: pointer;
`

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.408px;
  color: #41522E;
  border: none;
  background: none;
  cursor: pointer;
`

export const ButtonIcon = styled.img`
  height: 24px;
  width: 24px;
`