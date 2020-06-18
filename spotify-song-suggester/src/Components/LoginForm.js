import React from "react";
import "./LoginForm.css";
import { Formik, useFormik, Form, Field } from 'formik';


const LoginForm = () => {
  const formData = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    handleSubmit: (values => {
      console.log(values)
    })
  })
  return (
    <div className="login">
      <h1>Log In</h1>
      <Formik>
        <Form>
          <label>Username</label>
          <Field className="field" name="username" type="text" placeholder="username" onChange={Formik.handleChange} />
          <label>Password</label>
          <Field className="field" name="password" type="password" placeholder="password" onChange={Formik.handleChange} />
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}


export default LoginForm;