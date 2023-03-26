import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import $api from '../http';
import { API_KEY } from '../constants';
import { ResponseData } from '../entities/Weather';

export const fetchWeatherByCity = createAsyncThunk<
  ResponseData,
  string,
  {
    rejectValue: any;
  }
>('weather/fetchWeatherByCity', async (city: string, thunkAPI) => {
  try {
    const { data } = await $api.get<ResponseData>(
      `?q=${city}&exclude=current&appid=${API_KEY}`
    );

    return data;
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(
      error.response?.data.message || 'Unexpected error'
    );
  }
});
