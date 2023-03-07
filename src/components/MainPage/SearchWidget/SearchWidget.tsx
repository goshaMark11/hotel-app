import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { addDays, set } from 'date-fns';
import * as yup from "yup";

import { Input } from '../../Input/Input';
import { SearchFormValues } from './types/SearchFormValues';
import { MainButton } from '../../MainButton';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { datePickerStrToDate, dateToDatePickerStr } from '../../../utils/helper-functions';
import { useSearchParams } from 'react-router-dom';
import { SearchHotelsData } from '../../../services/hotel/types/search-hotels-data';
import { SearchHotelsQuery } from '../../../services/hotel/enums/search-hotels-query';
import { ValidationErrors } from '../../../shared/validation/validation-errors';
import { fetchHotels } from '../../../store/sagaActions/hotel-actions';
import { initialSearchData } from '../../../shared/initial-search-data';

const MainView = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  width: 360px;
  padding: 32px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SubmitButtonWrapper = styled.div`
  margin-top: 12px;
`

const schema = yup.object({
  location: yup
    .string()
    .trim()
    .required(ValidationErrors.MANDATORY_FIELD),
  checkInDate: yup
    .string()
    .required(ValidationErrors.MANDATORY_FIELD)
    .test(
      'date-check',
      ValidationErrors.INVALID_DATE,
      (value) => {
        return datePickerStrToDate(value).getTime() >= set(new Date(), { hours: 0, minutes: 0, seconds: -1 }).getTime()
      },
    ),
  rentalDaysAmount: yup
    .number()
    .positive(ValidationErrors.MINIMUM_RENTAL_DAYS)
    .required(ValidationErrors.MANDATORY_FIELD),
}).required();

export const SearchWidget = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SearchFormValues>({
    resolver: yupResolver(schema), defaultValues: {
      location: '',
      checkInDate: '',
      rentalDaysAmount: 1,
    }
  });

  const searchHotels = useCallback((location: string, checkInDate: string, rentalDaysAmount: number) => {
    const checkOutDate = dateToDatePickerStr(addDays(datePickerStrToDate(checkInDate), rentalDaysAmount))
    dispatch(fetchHotels({ location, checkInDate, checkOutDate }))
  }, [dispatch])

  // validate and set form values from query params
  useEffect(() => {
    (async () => {
      const location = searchParams.get(SearchHotelsQuery.LOCATION)!
      const checkInDate = searchParams.get(SearchHotelsQuery.CHECK_IN_DATE)!
      const rentalDaysAmount = Number(searchParams.get(SearchHotelsQuery.RENTAL_DAYS_AMOUNT))

      const isValidQueryParams = await schema.isValid({ location, checkInDate, rentalDaysAmount })

      if (isValidQueryParams) {
        const formValues: SearchFormValues = {
          location,
          checkInDate,
          rentalDaysAmount,
        }
        reset(formValues)

        searchHotels(location, checkInDate, rentalDaysAmount)
      } else {
        setSearchParams(initialSearchData)

        const { location, check_in_date: checkInDate, rental_days_amount: rentalDaysAmount } = initialSearchData
        searchHotels(location, checkInDate, Number(rentalDaysAmount))
      }
    })()

  }, [searchParams, searchHotels, reset, setSearchParams])

  const onSubmit = async (data: SearchFormValues) => {
    const { location, checkInDate, rentalDaysAmount } = data
    const searchData: SearchHotelsData = {
      location,
      check_in_date: checkInDate,
      rental_days_amount: rentalDaysAmount.toString(),
    }

    setSearchParams(searchData)
    searchHotels(location, checkInDate, rentalDaysAmount)
  }

  return (
    <MainView>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input boldLabel={true} fieldName='location' title='Локация' register={register} errors={errors} />
        <Input boldLabel={true} fieldName='checkInDate' title='Дата заселения' inputType='date' register={register} errors={errors} minDate={dateToDatePickerStr(new Date())} pattern="\d{1,2}/\d{1,2}/\d{4}" />
        <Input boldLabel={true} fieldName='rentalDaysAmount' title='Количество дней' register={register} inputType='number' errors={errors} />

        <SubmitButtonWrapper>
          <MainButton type='submit' title='Найти' />
        </SubmitButtonWrapper>
      </Form>
    </MainView>
  );
};