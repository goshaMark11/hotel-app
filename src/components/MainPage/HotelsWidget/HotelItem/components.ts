import styled from 'styled-components';

export const ContentView = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const WrapperIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(65, 82, 46, 0.05);
  border-radius: 50%;
  margin-right: 24px;
`

export const HotelIcon = styled.img`
  width: 35px;
  height: 35px;
  transform: translateY(-8%);
`

export const InfoView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HotelName = styled.span`
  width: 90%;
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #424242;
`

export const DateView = styled.span`
  display: flex;
`

export const DateLabel = styled.span`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #878787;
  margin-right: 24px;
`

export const DaysAmountLabel = styled.span`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #878787;
`

export const Dash = styled.span`
  background: #C4C4C4;
  border-radius: 2px;
  width: 9px;
  height: 1px;
  margin-right: 10px;
  align-self: center;
`

export const FavoriteIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 24px;
  width: 23px;
  height: 20px;
  cursor: pointer;
`

export const PriceLabel = styled.span`
  position: absolute;
  right: 16px;
  bottom: 16px;
  font-weight: 300;
  font-size: 11px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #878787;

  span {
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #424242;
    margin-left: 20px;
    font-weight: 400;
  }
`

export const FeedbackItemWrapper = styled.span`
  margin-top: 5px;
`

export const MainView = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
  padding: 16px 16px 16px 0;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;

    ${PriceLabel} {
      bottom: 0;
    }
  }
`