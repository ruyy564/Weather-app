import { RootState } from '../../store';

export const selectWeatherWind = (state: RootState) => state.weather.wind;

export const selectWeatherCity = (state: RootState) => state.weather.city;

export const selectWeatherCountry = (state: RootState) => state.weather.country;

export const selectWeatherErrorMessage = (state: RootState) =>
  state.weather.errorMessage;

export const selectWeatherPrecipitation = (state: RootState) =>
  state.weather.precipitation;

export const selectWeatherStatus = (state: RootState) => state.weather.status;

export const selectWeatherTemperature = (state: RootState) =>
  state.weather.temperature;
