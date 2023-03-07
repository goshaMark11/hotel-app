import styled from 'styled-components'

export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 18px 32px 32px;
  gap: 32px;
  width: 360px;
  background: #FFFFFF;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #424242;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 310px;
  overflow: auto;
  padding-right: 14px;

  &::-webkit-scrollbar {
    width: 2px;
    background: #E7E7E7;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #41522E;
    border-radius: 2px;
  }
`

export const FilterButtonsBox = styled.div`
  display: flex;
  gap: 8px;
`