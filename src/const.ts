export enum APIRoute {
  Quests = '/quests',
  Order = '/orders',
}

export enum Levels {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export const Level = {
  easy: 'простой',
  medium: 'средний',
  hard: 'сложный',
}

export enum Genres {
  all = 'all',
  adventure = 'adventure',
  horror = 'horror',
  mystic = 'mystic',
  detective = 'detective',
  scifi = 'scifi',
}

export const Genre = {
  all: 'Все квесты',
  adventure: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  scifi: 'Sci-fi',
}
