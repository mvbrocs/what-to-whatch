import img1 from './img/fantastic-beasts-the-crimes-of-grindelwald.jpg';
import img2 from './img/bohemian-rhapsody.jpg';
import img3 from './img/macbeth.jpg';
import img4 from './img/aviator.jpg';
import img5 from './img/we-need-to-talk-about-kevin.jpg';

export interface IMovie {
  id: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
  videoSrc: string;
}

export const movies: IMovie[] = [
  {
    id: 'movie-1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: {
      src: img1,
      alt: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
  {
    id: 'movie-2',
    title: 'Bohemian Rhapsody',
    img: {
      src: img2,
      alt: 'Bohemian Rhapsody',
    },
    videoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 'movie-3',
    title: 'Macbeth',
    img: {
      src: img3,
      alt: 'Macbeth',
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
  {
    id: 'movie-4',
    title: 'Aviator',
    img: {
      src: img4,
      alt: 'Aviator',
    },
    videoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 'movie-5',
    title: 'What We Do in the Shadows',
    img: {
      src: img5,
      alt: 'What We Do in the Shadows',
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
];
