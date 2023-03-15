import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchWeatherByCity } from '../../services/weather';
import { ResponseData, State } from '../../entities/Weather';
import { getTemteratureToCelsius } from '../../entities/Weather/helpers';
import { STATUS } from '../../constants';

const initialState: State = {
  city: null,
  country: null,
  precipitation: null,
  temperature: null,
  wind: null,
  errorMessage: null,
  status: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchWeatherByCity.fulfilled,
        (state, { payload }: PayloadAction<ResponseData>) => {
          state.city = payload.name;
          state.country = payload.sys.country;
          state.temperature = getTemteratureToCelsius(payload.main.temp);
          state.precipitation = payload.weather[0].main;
          state.wind = payload.wind.speed;
          state.status = STATUS.success;
        }
      )
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.status = STATUS.loading;
        state.errorMessage = null;
        state.city = null;
        state.country = null;
        state.precipitation = null;
        state.temperature = null;
        state.wind = null;
      })
      .addCase(
        fetchWeatherByCity.rejected,
        (state, { payload }: PayloadAction<string>) => {
          state.status = STATUS.error;
          state.errorMessage = payload;
        }
      );
  },
});

export default weatherSlice.reducer;
