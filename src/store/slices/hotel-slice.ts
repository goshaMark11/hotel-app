import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Hotel } from '../../services/hotel/types/hotel'
import { FavoriteHotel } from '../../services/hotel/types/favorite-hotel'
import { SortingOrder, SortingOrderType } from '../../shared/enums/sorting-order'
import { HotelSortingFields, HotelSortingFieldsType } from '../../services/hotel/enums/hotel-filters'
import { findHotelInFavorites } from '../../services/hotel/hotel-service'

type HotelsState = {
  sortingField: HotelSortingFieldsType
  sortOrder: SortingOrderType
  hotelImages: string[]
  hotels: Hotel[]
  favoriteHotels: FavoriteHotel[]
  isLoading: boolean
  errorMsg: string
}

const initialState: HotelsState = {
  sortingField: HotelSortingFields.RATING,
  sortOrder: SortingOrder.ASC,
  hotelImages: [
    'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=203&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWx8fHx8fHwxNjc4MTg4NjA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    'https://images.unsplash.com/photo-1523699289804-55347c09047d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=203&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWx8fHx8fHwxNjc4MTg4NjU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    'https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=203&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWx8fHx8fHwxNjc4MTg4NzA2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=203&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWx8fHx8fHwxNjc4MTg4Njgy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    'https://images.unsplash.com/photo-1597634285596-01fd1bffe116?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=203&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWx8fHx8fHwxNjc4MTg4NzE4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
  ],
  hotels: [],
  favoriteHotels: [],
  isLoading: false,
  errorMsg: '',
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    getHotelsFetch(state: HotelsState) {
      state.isLoading = true
      state.errorMsg = ''
      state.hotels = []
    },
    rejectHotelsFetch(state: HotelsState, action: PayloadAction<string>) {
      state.isLoading = false
      state.errorMsg = action.payload
    },
    setHotels(state: HotelsState, action: PayloadAction<Hotel[]>) {
      state.isLoading = false
      state.hotels = action.payload
    },
    addHotelToFavorite(state: HotelsState, action: PayloadAction<{ hotel: Hotel, checkInDate: string, rentalDaysAmount: number }>) {
      const { hotel, checkInDate, rentalDaysAmount } = action.payload

      const sameFavoriteHotelIndex = state.favoriteHotels.findIndex(favoriteHotel => findHotelInFavorites(favoriteHotel, hotel.hotelId, checkInDate, rentalDaysAmount))
      if (sameFavoriteHotelIndex >= 0) {
        state.favoriteHotels = state.favoriteHotels.filter((_, i) => i !== sameFavoriteHotelIndex)
      } else {
        const newFavoriteHotel = { ...hotel, checkInDate, rentalDaysAmount }
        state.favoriteHotels = [...state.favoriteHotels, newFavoriteHotel]
      }
    },
    setSortingField(state: HotelsState, action: PayloadAction<HotelSortingFields>) {
      const payloadSortingField = action.payload

      if (payloadSortingField === state.sortingField) {
        if (state.sortOrder === SortingOrder.ASC) {
          state.sortOrder = SortingOrder.DESC
        } else {
          state.sortOrder = SortingOrder.ASC
        }
      } else {
        state.sortingField = payloadSortingField
        state.sortOrder = SortingOrder.ASC
      }
    },
  }
})

export const { setHotels, addHotelToFavorite, getHotelsFetch, rejectHotelsFetch, setSortingField } = hotelSlice.actions
export default hotelSlice.reducer