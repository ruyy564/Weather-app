import { STATUS } from '../../constants';
import { PRECIPITATION } from './constants';

export interface State {
  temperature: number | null; // температура, (С)
  wind: number | null; // скорость ветра, (м/с)
  precipitation: PRECIPITATION | null; //осадки : дождь, снег
  city: string | null; // город
  country: string | null; // страна
  errorMessage: string | null;
  status: STATUS | null;
}

export type ResponseData = {
  main: {
    temp: number; // температура, (К)
  };
  name: string; // город
  weather: [
    {
      main: PRECIPITATION; // тип погоды : дождь, снег
      description: string; // описание
    }
  ];
  sys: {
    country: string; // страна
  };
  wind: {
    speed: number; //скорость ветра, (м/с)
  };
};
