import React from "react";
import "./LoginForm.css";
import { Formik, useFormikContext, Form, Field } from 'formik';


const LoginForm = () => {
  // const formData = useFormikContext({
  //   initialValues: {
  //     username: "",
  //     password: ""
  //   },
  //   onSubmit: values => {
  //     console.log(values)
  //   },
  // })
  const initialValues = {
    userLogin: [
      {
        username: "",
        password: ""
      }
    ]
  }

  return (
    <div className="login">
      <h1>Log In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field name="userLogin[0].username" type="text" placeholder="username" />
          <label htmlFor="password">Password</label>
          <Field name="userLogin[0].password" type="password" placeholder="password" />
          {/* add new user route to sign up */}
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}


export default LoginForm;