import { format, parse } from 'date-fns'
import { ru } from 'date-fns/esm/locale'

export const dateToHumanStr = (date: Date, isSingeDayValue?: boolean): string => {
  let result: string

  if (isSingeDayValue) {
    result = format(date, 'd MMMM yyyy', { locale: ru })
  } else {
    result = format(date, 'dd MMMM yyyy', { locale: ru })
  }

  return result.toLowerCase()
}

export const dateToDatePickerStr = (date: Date): string => {
  return format(date, 'yyyy-MM-dd')
}

export const datePickerStrToDate = (dateStr: string): Date => {
  return parse(dateStr, 'yyyy-MM-dd', new Date())
}

export const thousandSeparator = (number: number): string => {
  return number.toLocaleString().replace(/\,/g, " ")
}

export const wordDeclensions = (number: number, words: string[]) => {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}