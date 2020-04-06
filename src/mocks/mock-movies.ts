import img1 from './img/fantastic-beasts-the-crimes-of-grindelwald.jpg';
import img2 from './img/bohemian-rhapsody.jpg';
import img3 from './img/macbeth.jpg';
import img4 from './img/aviator.jpg';
import img5 from './img/we-need-to-talk-about-kevin.jpg';

export interface IMovie {
  id: string;
  title: string;
  genre: string;
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  videoSrc: string;
}

export const mockMovies: IMovie[] = [
  {
    id: 'movie-1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Fantastic',
    img: {
      src: img1,
      alt: 'Fantastic Beasts: The Crimes of Grindelwald',
      width: 280,
      height: 175,
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
  {
    id: 'movie-2',
    title: 'Bohemian Rhapsody',
    genre: 'Dramas',
    img: {
      src: img2,
      alt: 'Bohemian Rhapsody',
      width: 280,
      height: 175,
    },
    videoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 'movie-3',
    title: 'Macbeth',
    genre: 'Comedy',
    img: {
      src: img3,
      alt: 'Macbeth',
      width: 280,
      height: 175,
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
  {
    id: 'movie-4',
    title: 'Aviator',
    genre: 'Horror',
    img: {
      src: img4,
      alt: 'Aviator',
      width: 280,
      height: 175,
    },
    videoSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    id: 'movie-5',
    title: 'What We Do in the Shadows',
    genre: 'Crime',
    img: {
      src: img5,
      alt: 'What We Do in the Shadows',
      width: 280,
      height: 175,
    },
    videoSrc:
      'https://st.depositphotos.com/1100827/3666/v/600/depositphotos_36660843-stock-video-girl-leans-back-among-the.mp4',
  },
];
