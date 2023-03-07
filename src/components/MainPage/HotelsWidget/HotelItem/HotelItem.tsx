import { FC } from 'react';

import { FeedbackItem } from '../../FeedbackItem/FeedbackItem';
import { declensionsWordsDictionary } from '../../../../shared/declensions-words-dictionary';
import { datePickerStrToDate, dateToHumanStr, thousandSeparator, wordDeclensions } from '../../../../utils/helper-functions';
import { MainView, WrapperIcon, HotelIcon, ContentView, InfoView, HotelName, DateView, DateLabel, Dash, DaysAmountLabel, FeedbackItemWrapper, FavoriteIcon, PriceLabel } from './components';



type Props = {
  title: string
  stars: 0 | 1 | 2 | 3 | 4 | 5
  price: number
  likeHandler: () => void
  rentalDaysAmount: number
  checkInDate: string
  isFavorite?: boolean
};

export const HotelItem: FC<Props> = ({ title, stars, price, likeHandler, isFavorite, rentalDaysAmount, checkInDate }) => {
  const dayLabel = wordDeclensions(rentalDaysAmount, declensionsWordsDictionary.day)
  const parsedCheckInDate = datePickerStrToDate(checkInDate)

  return (
    <MainView>
      <WrapperIcon>
        <HotelIcon src='/icons/house.svg' alt='hotel' />
      </WrapperIcon>

      <ContentView>
        <InfoView>
          <HotelName>{title}</HotelName>

          <DateView>
            <DateLabel>{dateToHumanStr(parsedCheckInDate, true)}</DateLabel>
            <Dash />
            <DaysAmountLabel>{rentalDaysAmount} {dayLabel}</DaysAmountLabel>
          </DateView>

          <FeedbackItemWrapper>
            <FeedbackItem stars={stars} />
          </FeedbackItemWrapper>
        </InfoView>

        {
          isFavorite ? <FavoriteIcon onClick={likeHandler} src='/icons/heart-full.svg' alt='like' />
            : <FavoriteIcon onClick={likeHandler} src='/icons/heart-empty.svg' alt='unlike' />
        }

        <PriceLabel>Price: <span>{thousandSeparator(Math.ceil(price))} ₽</span></PriceLabel>
      </ContentView>
    </MainView>
  );
};