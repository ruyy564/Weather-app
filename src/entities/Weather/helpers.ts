import {
  PRECIPITATION,
  CLOTHES,
  CLOTHING_FEATURE,
  WEATHER,
  FEELING,
} from '../Weather/constants';

export const getTemteratureToCelsius = (temperatureKelvin: number) =>
  Math.floor(temperatureKelvin - 273);

const getWeather = (temperature: number) => {
  let weather: WEATHER | null = null;

  if (temperature >= 20) {
    weather = WEATHER.Hot;
  }

  if (temperature >= 10 && temperature < 20) {
    weather = WEATHER.Warm;
  }

  if (temperature >= 0 && temperature < 10) {
    weather = WEATHER.Cool;
  }

  if (temperature >= -10 && temperature < 0) {
    weather = WEATHER.Cold;
  }

  if (temperature >= -30 && temperature < -10) {
    weather = WEATHER.Frost;
  }

  if (temperature < -30) {
    weather = WEATHER.VeryCold;
  }

  return weather;
};

const getClothingFeature = (precipitation: PRECIPITATION) => {
  let clothingFeature: CLOTHING_FEATURE = CLOTHING_FEATURE.Absent;

  if (precipitation === PRECIPITATION.Rain) {
    clothingFeature = CLOTHING_FEATURE.Waterproof;
  }

  if (precipitation === PRECIPITATION.Snow) {
    clothingFeature = CLOTHING_FEATURE.NeedHeaddress;
  }

  return clothingFeature;
};

const getFeeling = (wind: number) => {
  let feeling: FEELING = FEELING.LikeOnThermometer;

  if (wind <= 0.2) {
    feeling = FEELING.Warmer;
  }

  if (wind <= 5 && wind > 0.2) {
    feeling = FEELING.LikeOnThermometer;
  }

  if (wind > 5) {
    feeling = FEELING.Cooler;
  }

  return feeling;
};

export const getCloses = (
  temperature: number,
  wind: number,
  precipitation: PRECIPITATION
) => {
  let closes: CLOTHES[] = [];
  let clothingFeature: CLOTHING_FEATURE = getClothingFeature(precipitation);
  let weather: WEATHER | null = getWeather(temperature);
  let feeling: FEELING = getFeeling(wind);

  if (weather === WEATHER.Hot && clothingFeature === CLOTHING_FEATURE.Absent) {
    closes = [CLOTHES.Undershirt, CLOTHES.Sneakers, CLOTHES.Shorts];
  }

  if (
    weather === WEATHER.Hot &&
    clothingFeature === CLOTHING_FEATURE.Waterproof
  ) {
    closes = [
      CLOTHES.Undershirt,
      CLOTHES.Sneakers,
      CLOTHES.Shorts,
      CLOTHES.Umbrella,
    ];
  }

  if (weather === WEATHER.Warm && clothingFeature === CLOTHING_FEATURE.Absent) {
    closes = [CLOTHES.Trousers, CLOTHES.Hoody, CLOTHES.Sneakers];
  }

  if (
    weather === WEATHER.Warm &&
    clothingFeature === CLOTHING_FEATURE.Waterproof
  ) {
    closes = [
      CLOTHES.Trousers,
      CLOTHES.Hoody,
      CLOTHES.Sneakers,
      CLOTHES.Umbrella,
    ];
  }

  if (weather === WEATHER.Warm && feeling === FEELING.Cooler) {
    closes = [CLOTHES.Windbreaker, CLOTHES.Sneakers, CLOTHES.Trousers];
  }

  if (weather === WEATHER.Cool) {
    closes = [CLOTHES.Windbreaker, CLOTHES.Sneakers, CLOTHES.Trousers];
  }

  if (weather === WEATHER.Cold) {
    closes = [
      CLOTHES.Windbreaker,
      CLOTHES.Sneakers,
      CLOTHES.Trousers,
      CLOTHES.Scarf,
      CLOTHES.Cap,
    ];
  }

  if (weather === WEATHER.Frost) {
    closes = [
      CLOTHES.WarmJacket,
      CLOTHES.Boots,
      CLOTHES.WarmPants,
      CLOTHES.Scarf,
      CLOTHES.Cap,
    ];
  }

  if (weather === WEATHER.VeryCold) {
    closes = [
      CLOTHES.WarmJacket,
      CLOTHES.Boots,
      CLOTHES.WarmPants,
      CLOTHES.Scarf,
      CLOTHES.Cap,
    ];
  }

  if (weather === WEATHER.Hot && clothingFeature === CLOTHING_FEATURE.Absent) {
    closes = [CLOTHES.Undershirt, CLOTHES.Sneakers, CLOTHES.Shorts];
  }

  if (clothingFeature === CLOTHING_FEATURE.Waterproof) {
    closes.push(CLOTHES.Umbrella);
  }

  return closes;
};
