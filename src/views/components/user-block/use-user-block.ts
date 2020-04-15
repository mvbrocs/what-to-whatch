import { useSelector } from 'react-redux';

import { selectUser } from 'src/state/user/selectors';

export const useUserBlock = () => {
  const user = useSelector(selectUser);

  return { user };
};
