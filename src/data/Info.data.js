import img1 from '../assets/images/img-1.jpg'
import img2 from '../assets/images/img-2.jpg'

export const InfoOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Create memories',
  headLine: 'Live unforgettable experiences',
  description:
    'You know that feeling of wonder and excitement when you start doing something new? When do you go on an adventure, either physically or mentally? Join us so you can start living unforgettable experiences.',
  buttonLabel: 'Start the adventure',
  imgStart: true,
  img: img1,
  alt: 'Cat',
  dark: true,
  primary: true,
  darkText: false,
}

export const InfoTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'New frontiers',
  headLine: 'Learn from new cultures',
  description: 'Get to know how people are and share unique moments with them.',
  buttonLabel: 'Find out more',
  imgStart: false,
  img: img2,
  alt: 'Cat with snow',
  dark: false,
  primary: false,
  darkText: true,
}
