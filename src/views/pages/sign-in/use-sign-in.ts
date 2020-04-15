import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from 'src/state/user/actions';

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
