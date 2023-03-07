import { SearchHotelsData } from '../services/hotel/types/search-hotels-data';
import { dateToDatePickerStr } from '../utils/helper-functions';

export const initialSearchData: SearchHotelsData = {
  location: 'Москва',
  check_in_date: dateToDatePickerStr(new Date()),
  rental_days_amount: '1',
}