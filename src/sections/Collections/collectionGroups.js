import categoryItems from '@/sections/Categories/categoryItems'

const defaultSliderParams = {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1.58,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
}

const repeat = (items, times = 4) => Array(times).fill(items).flat()

const collectionGroups = [
  {
    isActive: true,
    title: 'New',
    items: [
      {
        title: 'Popular Top 10 In Genres',
        categoryItems,
      },
      {
        title: 'Trending Now',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/trending_now/1.jpg',
            duration: '4h 33min',
            views: '28K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/trending_now/2.webp',
            duration: '4h 28min',
            views: '26K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/trending_now/3.webp',
            duration: '4h 51min',
            views: '33K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/trending_now/4.jpg',
            duration: '4h 44min',
            views: '26K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/trending_now/5.jpg',
            duration: '4h 37min',
            views: '31K',
          },
        ]),
      },
      {
        title: 'New Releases',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/new_releases/1.webp',
            released: {
              label: '2026',
              dateTime: '2026-04-14',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/new_releases/2.webp',
            released: {
              label: '2026',
              dateTime: '2026-04-14',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/new_releases/3.webp',
            released: {
              label: '2026',
              dateTime: '2026-04-14',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/new_releases/4.webp',
            released: {
              label: '2026',
              dateTime: '2026-04-14',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/new_releases/5.webp',
            released: {
              label: '2026',
              dateTime: '2026-04-14',
            },
          },
        ]),
      },
      {
        title: 'New anime for the evening',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/evening/1.webp',
            duration: '3h 27min',
            rating: {
              value: 4.5,
              label: '40K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/evening/2.webp',
            duration: '4h 28min',
            rating: {
              value: 4.5,
              label: '39K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/evening/3.webp',
            duration: '4h 57min',
            rating: {
              value: 4.5,
              label: '36K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/evening/4.webp',
            duration: '4h 36min',
            rating: {
              value: 4.5,
              label: '39K',
            },
          },
        ]),
        sliderParams: defaultSliderParams,
      },
    ],
  },
  {
    title: 'Popular',
    items: [
      {
        title: 'Popular Top 10 In Genres',
        categoryItems,
      },
      {
        title: 'Popular anime of last year',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/last_year/1.webp',
            duration: '4h 33min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/last_year/2.webp',
            duration: '4h 21min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/last_year/3.webp',
            duration: '1h 58min',
            season: 'Movie',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/last_year/4.webp',
            duration: '4h 30min',
            season: '1 Season',
            href: '/show',
          },
        ]),
        sliderParams: defaultSliderParams,
      },
      {
        title: 'Old anime',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/old/1.jpg',
            duration: '4h 22min',
            season: '1 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/old/2.jpg',
            duration: '9h 13min',
            season: '1 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/old/3.jpg',
            duration: '203h 30min',
            season: '9 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/old/4.jpg',
            duration: '10h 8min',
            season: '2 Season',
            href: '/show',
          },
        ]),
        sliderParams: defaultSliderParams,
      },
      {
        title: 'Anime films',
        movieItems: repeat([
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/film/1.webp',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '69K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/film/2.jpeg',
            duration: '1h 58min',
            rating: {
              value: 4.5,
              label: '66K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/film/3.jpg',
            duration: '2h 11min',
            rating: {
              value: 4.5,
              label: '65K',
            },
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/anime/film/4.webp',
            duration: '1h 48min',
            rating: {
              value: 4.5,
              label: '65K',
            },
          },
        ]),
        sliderParams: defaultSliderParams,
      },
    ],
  },
]

export default collectionGroups
