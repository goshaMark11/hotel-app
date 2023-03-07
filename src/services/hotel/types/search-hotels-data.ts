import { SearchHotelsQuery } from '../enums/search-hotels-query'

export type SearchHotelsData = {
  [SearchHotelsQuery.LOCATION]: string
  [SearchHotelsQuery.CHECK_IN_DATE]: string
  [SearchHotelsQuery.RENTAL_DAYS_AMOUNT]: string
}