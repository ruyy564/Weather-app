import { connect } from 'react-redux';

import Search from '../components/Search';
import { fetchWeatherByCity } from '../services/weather';

const mapDispatch = {
  fetchWeatherByCity: (city: string) => fetchWeatherByCity(city),
};

const connector = connect(null, mapDispatch);

export default connector(Search);
