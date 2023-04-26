import Windbreaker from '../../assets/closes/Windbreaker.png';
import Boots from '../../assets/closes/Boots.png';
import Cap from '../../assets/closes/Cap.png';
import Hoody from '../../assets/closes/Hoody.png';
import Scarf from '../../assets/closes/Scarf.png';
import Shorts from '../../assets/closes/Shorts.png';
import Sneakers from '../../assets/closes/Sneakers.png';
import Trousers from '../../assets/closes/Trousers.png';
import Umbrella from '../../assets/closes/Umbrella.png';
import Undershirt from '../../assets/closes/Undershirt.png';
import Girl from '../../assets/girl.png';

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

export enum PEOPLE {
  Girl = 'Girl',
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

export const CLOSES_IMAGES = {
  [CLOTHES.Windbreaker]: Windbreaker,
  [CLOTHES.Boots]: Boots,
  [CLOTHES.Hoody]: Hoody,
  [CLOTHES.Scarf]: Scarf,
  [CLOTHES.Shorts]: Shorts,
  [CLOTHES.Sneakers]: Sneakers,
  [CLOTHES.Trousers]: Trousers,
  [CLOTHES.Umbrella]: Umbrella,
  [CLOTHES.Undershirt]: Undershirt,
  [CLOTHES.WarmJacket]: Windbreaker,
  [CLOTHES.WarmPants]: Trousers,
  [CLOTHES.Cap]: Cap,
};

export const PEOPLE_IMAGES = {
  [PEOPLE.Girl]: Girl,
};
