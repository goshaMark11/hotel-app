import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 50px;
  padding: 15px;
  background: #FFFFFF;
  border: 1px solid #C9CACC;
  border-radius: 4px;
  font-weight: 300;
  font-size: 16px;
  outline-color: #b4b6b8;
  font-family: 'Roboto', sans-serif;
`

export const Label = styled.label<{ boldLabel?: boolean }>`
  font-weight: ${({ boldLabel }) => boldLabel ? 500 : 300} ;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
`

export const ErrorLabel = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #EB1717;
`

export const MainView = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 7px;

  ${Label} {
    color: ${({ isError }) => isError ? '#EB1717' : '#424242'};
  }

  ${StyledInput} {
    color: ${({ isError }) => isError ? '#EB1717' : '#424242'};
  }
`