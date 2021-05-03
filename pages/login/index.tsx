import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import Layout from '../../components/layout';

interface Values {
  email: string;
  password: string;
}

export default function Login() {
  return (
    <Layout>
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
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="อีเมล"
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="รหัสผ่าน"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              เข้าสู่ระบบ
            </Button>
            <br />
            <Button variant="contained" color="primary">
              สร้างบัญชีผู้ใช้
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}
