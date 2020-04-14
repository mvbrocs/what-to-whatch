import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { login, selectUser } from 'src/state/user';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const user = useSelector(selectUser);

  return { formik, user };
};
