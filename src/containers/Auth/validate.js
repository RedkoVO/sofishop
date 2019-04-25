const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'error.required'
  } else if (!/.+@.+\..+/i.test(values.email)) {
    errors.email = 'error.email'
  }

  if (!values.emailRegister) {
    errors.emailRegister = 'error.required'
  } else if (!/.+@.+\..+/i.test(values.emailRegister)) {
    errors.emailRegister = 'error.emailRegister'
  }

  if (!values.password) {
    errors.password = 'error.required'
  }

  return errors
}

export default validate
