import { useState } from 'react';

export const useMovieCard = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const cardMouseEnterHandler = () => setMouseEnter(true);
  const cardMouseLeaveHandler = () => setMouseEnter(false);

  return { mouseEnter, cardMouseEnterHandler, cardMouseLeaveHandler };
};
