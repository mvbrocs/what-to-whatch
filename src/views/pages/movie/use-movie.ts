import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useMovie = () => {
  const { id } = useParams();

  return { id };
};
