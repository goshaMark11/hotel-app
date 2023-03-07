import { put, takeEvery, call, delay } from "redux-saga/effects"
import { toast } from 'react-toastify'

import { Hotel } from '../../services/hotel/types/hotel'
import { getHotels } from '../../services/hotel/hotel-service'
import { FETCH_HOTELS_SAGA } from '../sagaActions/hotel-actions'
import { HotelErrors } from '../../services/hotel/enums/hotel-errors'
import { getHotelsFetch, rejectHotelsFetch, setHotels } from '../slices/hotel-slice'

export function* fetchHotelsSaga(action: any) {
  try {
    const { location, checkInDate, checkOutDate } = action.payload

    yield put(getHotelsFetch())
    yield delay(1000)
    let result: Hotel[] = yield call(() => getHotels({ location, checkInDate, checkOutDate }))
    yield put(setHotels(result))
  } catch (e) {
    const errorMsg = HotelErrors.FETCH

    toast.error(errorMsg)
    yield put(rejectHotelsFetch(errorMsg))
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_HOTELS_SAGA, fetchHotelsSaga)
}