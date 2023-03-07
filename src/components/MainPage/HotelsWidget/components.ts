import styled from 'styled-components';

export const MainView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 664px;
  width: 100%;
  padding: 48px 32px;
  gap: 28px;
  background: #FFFFFF;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`

export const InfoView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

export const InfoDate = styled.span`
  font-size: 24px;
  line-height: 28px;
  color: #41522E;
`

export const BreadCrumps = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #424242;
`

export const ArrowIcon = styled.img`
  width: 8.67px;
  height: 17.33px;
`

export const ImagesCarusel = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  overflow: hidden;
`

export const SkeletonCaruselItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 164px;
  height: 149px;
  border-radius: 10px;
  overflow: hidden;
`

export const CaruselItem = styled.img`
  display: flex;
  flex: 0 0 auto;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 164px;
  height: 149px;
  object-fit: cover;
`

export const FavoritesAmountStr = styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #424242;

  span {
    font-weight: 500;
    margin-left: 4px;
  }
`

export const HotelItemsContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
  margin-top: -8px;
  max-height: 529px;
  padding-right: 14px;
  overflow: auto;

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

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`