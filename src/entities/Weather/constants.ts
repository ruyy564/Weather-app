export const enum PRECIPITATION {
  Clouds = 'Clouds',
  Rain = 'Rain',
  Snow = 'Snow',
  Haze = 'Haze',
  Smoke = 'Smoke',
  Mist = 'Mist',
  Drizzle = 'Drizzle',
  Clear = 'Clear',
}

export const enum WEATHER {
  Hot = 'Hot',
  Warm = 'Warm',
  Frost = 'Frost',
  Cool = 'Cool',
  Cold = 'Cold',
  VeryCold = 'Very cold',
}

export const enum FEELING {
  Cooler = 'Cooler',
  LikeOnThermometer = 'Like on a thermometer',
  Warmer = 'Warmer',
}

export const enum CLOTHING_FEATURE {
  Absent = 'Absent',
  Waterproof = 'Waterproof',
  NeedHeaddress = 'Need a headdress',
}

export const enum CLOTHES {
  Windbreaker = 'Windbreaker', //ветровка
  Sneakers = 'Sneakers', //кроссовки
  Trousers = 'Trousers', //брюки
  Scarf = 'Scarf', //шарф
  Cap = 'Cap', //шапка
  Boots = 'Boots', //ботинки
  WarmPants = 'WarmPants', //теплые штаны
  WarmJacket = 'WarmJacket', //теплая куртка
  Umbrella = 'Umbrella', //зонт
  Hoody = 'Hoody', //толстовка
  Undershirt = 'Undershirt', //майка
  Shorts = 'Shorts', //шорты
}

export const PRECIPITATION_IMAGES = {
  [PRECIPITATION.Clouds]:
    'https://cdn-icons-png.flaticon.com/512/414/414825.png',
  [PRECIPITATION.Rain]:
    'https://cdn-icons-png.flaticon.com/512/3351/3351979.png',
  [PRECIPITATION.Snow]: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
  [PRECIPITATION.Haze]:
    'https://cdn-icons-png.flaticon.com/512/1197/1197102.png',
  [PRECIPITATION.Smoke]:
    'https://cdn-icons-png.flaticon.com/512/4380/4380458.png',
  [PRECIPITATION.Mist]:
    'https://cdn-icons-png.flaticon.com/512/4005/4005901.png',
  [PRECIPITATION.Drizzle]:
    'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
  [PRECIPITATION.Clear]:
    'https://cdn-icons-png.flaticon.com/512/6974/6974833.png',
};
