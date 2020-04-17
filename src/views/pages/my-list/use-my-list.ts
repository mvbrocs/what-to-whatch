import { useSelector } from 'react-redux';

import { selectUser } from 'src/state/user/selectors';

export const useMyList = () => {
  const user = useSelector(selectUser);

  return { user };
};
