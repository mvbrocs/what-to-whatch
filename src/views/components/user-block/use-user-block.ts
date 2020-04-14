import { useSelector } from 'react-redux';

import { selectUser } from 'src/state/user';

export const useUserBlock = () => {
  const user = useSelector(selectUser);

  return { user };
};
