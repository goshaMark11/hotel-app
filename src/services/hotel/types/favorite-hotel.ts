import { Hotel } from './hotel';

export type FavoriteHotel = Hotel & { checkInDate: string, rentalDaysAmount: number }