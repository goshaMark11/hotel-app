import { FetchHotelsData } from '../../services/hotel/types/fetch-hotels-data'

export const FETCH_HOTELS_SAGA = 'FETCH_HOTELS_SAGA'

export const fetchHotels = (fetchHotelsData: FetchHotelsData) => ({ type: FETCH_HOTELS_SAGA, payload: { ...fetchHotelsData } } )