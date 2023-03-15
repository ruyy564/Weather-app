import { connect } from 'react-redux';

import Card from '../components/Card';
import { RootState } from '../store';
import {
  selectWeatherCity,
  selectWeatherCountry,
  selectWeatherErrorMessage,
  selectWeatherPrecipitation,
  selectWeatherStatus,
  selectWeatherTemperature,
  selectWeatherWind,
} from '../entities/Weather/selectors';

const mapState = (state: RootState) => ({
  status: selectWeatherStatus(state),
  city: selectWeatherCity(state),
  country: selectWeatherCountry(state),
  errorMessage: selectWeatherErrorMessage(state),
  precipitation: selectWeatherPrecipitation(state),
  temperature: selectWeatherTemperature(state),
  wind: selectWeatherWind(state),
});

const connector = connect(mapState);

export default connector(Card);
