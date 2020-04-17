import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';

import { login } from 'src/state/user/slice';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(login(values));
      dispatch(goBack());
    },
  });

  return { formik };
};
