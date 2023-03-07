import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import { useSearchParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'

import { HotelItem } from './HotelItem/HotelItem';
import { Hotel } from '../../../services/hotel/types/hotel';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addHotelToFavorite } from '../../../store/slices/hotel-slice';
import { SearchHotelsQuery } from '../../../services/hotel/enums/search-hotels-query';
import { datePickerStrToDate, dateToHumanStr, wordDeclensions } from '../../../utils/helper-functions';
import { declensionsWordsDictionary } from '../../../shared/declensions-words-dictionary';
import { FavoriteHotel } from '../../../services/hotel/types/favorite-hotel';
import { findHotelInFavorites } from '../../../services/hotel/hotel-service';
import { initialSearchData } from '../../../shared/initial-search-data';
import { SkeletonItem } from '../../SkeletonItem';
import { MainView, InfoView, BreadCrumps, ArrowIcon, InfoDate, ImagesCarusel, SkeletonCaruselItem, CaruselItem, FavoritesAmountStr, SpinnerWrapper, HotelItemsContainer } from './components';



export const HotelsWidget = () => {
  const [searchParams] = useSearchParams();
  const caruselRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(caruselRef);

  const dispatch = useAppDispatch()
  const { hotels, hotelImages, favoriteHotels, isLoading } = useAppSelector(state => state.hotels)

  const location = searchParams.get(SearchHotelsQuery.LOCATION) ?? initialSearchData.location
  const checkInDate = searchParams.get(SearchHotelsQuery.CHECK_IN_DATE) ?? initialSearchData.check_in_date
  const rentalDaysAmount = Number(searchParams.get(SearchHotelsQuery.RENTAL_DAYS_AMOUNT)) ?? initialSearchData.rental_days_amount

  const likeHotelHandler = (hotel: Hotel) => {
    dispatch(addHotelToFavorite({ hotel, checkInDate, rentalDaysAmount }))
  }

  const isHotelFavorite = (hotel: Hotel, favoriteHotels: FavoriteHotel[]): boolean => {
    const hotelInFavorites = favoriteHotels.find(favoriteHotel => findHotelInFavorites(favoriteHotel, hotel.hotelId, checkInDate, rentalDaysAmount))
    if (hotelInFavorites) {
      return true
    }
    return false
  }

  const hotelLabel = wordDeclensions(favoriteHotels.length, declensionsWordsDictionary.hotel)

  return (
    <MainView>
      {
        isLoading ? <SkeletonItem width={600} height={38} /> :
          <InfoView>
            <BreadCrumps>
              Отели
              <ArrowIcon src='/icons/small-arrow-right.svg' alt='divider' />
              {location}
            </BreadCrumps>

            <InfoDate>{dateToHumanStr(datePickerStrToDate(checkInDate))}</InfoDate>
          </InfoView>
      }

      {
        isLoading ? (
          <ImagesCarusel ref={caruselRef} {...events}>
            {hotelImages.map((_, i) => <SkeletonCaruselItem key={i}>
              <SkeletonItem width={164} height={149} />
            </SkeletonCaruselItem>)}
          </ImagesCarusel>
        ) :
          <ImagesCarusel ref={caruselRef} {...events}>
            {hotelImages.map((imgUrl, i) => <CaruselItem key={i} src={imgUrl} alt={`hotel-img-${i}`} />)}
          </ImagesCarusel>
      }

      <FavoritesAmountStr>Добавлено в Избранное: <span>{favoriteHotels.length}</span> {hotelLabel}</FavoritesAmountStr>

      {isLoading ? <SpinnerWrapper>
        <Oval
          height={40}
          width={40}
          color="#964B00"
          ariaLabel='oval-loading'
          secondaryColor="#b0e0e6"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </SpinnerWrapper> :
        <HotelItemsContainer>
          {hotels.map(hotel => (
            <HotelItem
              key={hotel.hotelId}
              title={hotel.hotelName}
              price={hotel.priceFrom}
              stars={hotel.stars}
              likeHandler={() => likeHotelHandler(hotel)}
              isFavorite={isHotelFavorite(hotel, favoriteHotels)}
              rentalDaysAmount={rentalDaysAmount}
              checkInDate={checkInDate}
            />))}
        </HotelItemsContainer>
      }
    </MainView >
  );
};