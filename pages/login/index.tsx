import { Formik } from 'formik';
import Image from 'next/image';
import Layout from '../../components/layout';
import LoginForm from '../../components/LoginForm';

interface Values {
  email: string;
  password: string;
}

export default function Login() {
  return (
    <Layout>
      <Image
        src="/images/logo.png"
        alt="Picture of the author"
        width={90}
        height={90}
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <LoginForm submitForm={submitForm} isSubmitting={isSubmitting} />
        )}
      </Formik>
    </Layout>
  );
}
