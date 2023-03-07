import axios from 'axios'

import { Hotel } from './types/hotel'
import { HotelErrors } from './enums/hotel-errors'
import { FavoriteHotel } from './types/favorite-hotel'
import { FetchHotelsData } from './types/fetch-hotels-data'
import { SortingOrder, SortingOrderType } from '../../shared/enums/sorting-order'
import { HotelSortingFieldsType, HotelSortingFields } from './enums/hotel-filters'

const HOTELS_API_BASE_URL = 'http://engine.hotellook.com/api/v2/cache.json?currency=rub&limit=10'

export const getHotels = async (fetchHotelsData: FetchHotelsData): Promise<Hotel[]> => {
  const { location, checkInDate, checkOutDate } = fetchHotelsData
  const reqUrl = new URL(HOTELS_API_BASE_URL)

  reqUrl.searchParams.append('location', location)
  reqUrl.searchParams.append('checkIn', checkInDate)
  reqUrl.searchParams.append('checkOut', checkOutDate)

  const req = await axios.get<Hotel[]>(reqUrl.toString())


  if (req.status !== 200) {
    throw new Error(HotelErrors.FETCH)
  }

  return req.data
}

export const sortHotels = <T extends Hotel | FavoriteHotel>(hotels: T[], sortingField: HotelSortingFieldsType, order: SortingOrderType): T[] => {
  const sortedHotels = [...hotels]

  if (!sortingField || !order) {
    return sortedHotels
  }

  const fieldName = sortingField === HotelSortingFields.RATING ? 'stars' : 'priceFrom'

  if (order === SortingOrder.ASC) {
    sortedHotels.sort((a, b) => a[fieldName] - b[fieldName])
  } else {
    sortedHotels.sort((a, b) => b[fieldName] - a[fieldName])
  }
  return sortedHotels
}

export const findHotelInFavorites = (favoriteHotel: FavoriteHotel, hotelId: number, checkInDate: string, rentalDaysAmount: number) => (
  favoriteHotel.hotelId === hotelId && favoriteHotel.checkInDate === checkInDate && favoriteHotel.rentalDaysAmount === rentalDaysAmount
)