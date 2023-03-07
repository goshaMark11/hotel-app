import { FilterButton } from './FilterButton/FilterButton';
import { sortHotels } from '../../../services/hotel/hotel-service';
import { addHotelToFavorite, setSortingField } from '../../../store/slices/hotel-slice';
import { FavoriteHotelItem } from './FavotiteHotelItem/FavotiteHotelItem';
import { MainView, Title, FilterButtonsBox, Content } from './components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { HotelSortingFields } from '../../../services/hotel/enums/hotel-filters';
import { FavoriteHotel } from '../../../services/hotel/types/favorite-hotel';

export const FavoritesWidget = () => {
  const dispatch = useAppDispatch()
  const { favoriteHotels, sortingField, sortOrder } = useAppSelector(state => state.hotels)

  const sortByRatingHandler = () => {
    dispatch(setSortingField(HotelSortingFields.RATING))
  }

  const sortByPriceHandler = () => {
    dispatch(setSortingField(HotelSortingFields.PRICE))
  }

  const likeHotelHandler = (hotel: FavoriteHotel) => {
    const { checkInDate, rentalDaysAmount } = hotel
    dispatch(addHotelToFavorite({ hotel, checkInDate, rentalDaysAmount }))
  }

  const sortedHotels = sortHotels(favoriteHotels, sortingField, sortOrder)

  return (
    <MainView>
      <Title>Избранное</Title>

      <FilterButtonsBox>
        <FilterButton title='Рейтинг' onClick={sortByRatingHandler} isDisabled={sortingField !== HotelSortingFields.RATING} sortOrder={sortOrder} />
        <FilterButton title='Цена' onClick={sortByPriceHandler} isDisabled={sortingField !== HotelSortingFields.PRICE} sortOrder={sortOrder} />
      </FilterButtonsBox>

      <Content>
        {sortedHotels.map(hotel => (
          <FavoriteHotelItem
            key={`${hotel.hotelId}-${hotel.checkInDate}-${hotel.rentalDaysAmount}`}
            title={hotel.hotelName}
            price={hotel.priceFrom}
            stars={hotel.stars}
            checkInDate={hotel.checkInDate}
            rentalDaysAmount={hotel.rentalDaysAmount}
            likeHandler={() => likeHotelHandler(hotel)}
          />
        ))}
      </Content>
    </MainView>
  );
};