import { STATUS } from '../../constants';
import { PRECIPITATION } from './constants';

export interface State {
  temperature: number | null; // температура, (С)
  wind: number | null; // скорость ветра, (м/с)
  precipitation:
    | typeof PRECIPITATION.Clear
    | typeof PRECIPITATION.Clouds
    | typeof PRECIPITATION.Drizzle
    | typeof PRECIPITATION.Haze
    | typeof PRECIPITATION.Mist
    | typeof PRECIPITATION.Smoke
    | typeof PRECIPITATION.Snow
    | typeof PRECIPITATION.Rain
    | null; //осадки : дождь, снег
  city: string | null; // город
  country: string | null; // страна
  errorMessage: string | null;
  status:
    | typeof STATUS.error
    | typeof STATUS.error
    | typeof STATUS.error
    | null;
}

// weather: string;
//   feeling: string;
//   clothingFeature: string;
//   clothes: string;

export type ResponseData = {
  main: {
    temp: number; // температура, (К)
  };
  name: string; //city
  weather: [
    {
      main: string; // тип погоды : дождь, снег
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
