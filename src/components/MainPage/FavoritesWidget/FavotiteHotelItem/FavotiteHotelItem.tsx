import { FC } from 'react';

import { FeedbackItem } from '../../FeedbackItem/FeedbackItem';
import { declensionsWordsDictionary } from '../../../../shared/declensions-words-dictionary';
import { datePickerStrToDate, dateToHumanStr, thousandSeparator, wordDeclensions } from '../../../../utils/helper-functions';
import { MainView, ContentView, InfoView, HotelName, DateView, DateLabel, Dash, DaysAmountLabel, FeedbackItemWrapper, FavoriteIcon, PriceLabel } from './components';



type Props = {
  title: string
  stars: 0 | 1 | 2 | 3 | 4 | 5
  price: number
  checkInDate: string
  rentalDaysAmount: number
  likeHandler: () => void
};

export const FavoriteHotelItem: FC<Props> = ({ title, stars, price, checkInDate, rentalDaysAmount, likeHandler }) => {
  const dayLabel = wordDeclensions(rentalDaysAmount, declensionsWordsDictionary.day)
  const parsedCheckInDate = datePickerStrToDate(checkInDate)

  return (
    <MainView>
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

        <FavoriteIcon src='/icons/heart-full.svg' alt='favorite' onClick={likeHandler} />
        <PriceLabel>Price: <span>{thousandSeparator(Math.ceil(price))} ₽</span></PriceLabel>
      </ContentView>
    </MainView>
  );
};