import styled from 'styled-components';

export const TopArrowIcon = styled.svg`
`

export const BottomArrowIcon = styled.svg`
`

export const PointersBox = styled.div<{ isArrowUpActive: boolean }>`
  display: flex;
  flex-direction: column;

  ${TopArrowIcon} {
    path {
      fill-opacity: ${({ isArrowUpActive }) => isArrowUpActive ? '1' : '.3'};
    }
  }

  ${BottomArrowIcon} {
    path {
      fill-opacity: ${({ isArrowUpActive }) => isArrowUpActive ? '.3' : '1'};
    }
  }
`

export const Button = styled.button<{ isDisabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 17px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.408px;
  color: #41522E;
  padding: 4px 8px;
  height: 28px;
  background: #FFF;
  border: ${({ isDisabled }) => isDisabled ? '1px solid #E5E5E5' : '1px solid #41522E'};
  border-radius: 4px;
  opacity: ${({ isDisabled }) => isDisabled ? '.5' : '1'};
  cursor: pointer;

  ${BottomArrowIcon} {
    path {
      fill-opacity: ${({ isDisabled }) => isDisabled ? '1' : ''};
    }
  }
`