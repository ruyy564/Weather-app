import Axios from 'axios';

import { WEATHER_API_URL } from './constants';

const $api = Axios.create({
  baseURL: WEATHER_API_URL,
});

export default $api;
