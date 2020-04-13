import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from 'state/user';

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

  return { formik };
};
