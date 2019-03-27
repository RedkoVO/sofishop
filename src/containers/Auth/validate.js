const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'error.required'
  } else if (!/.+@.+\..+/i.test(values.email)) {
    errors.email = 'error.email'
  }

  if (!values.pass) {
    errors.pass = 'error.required'
  }

  return errors
}

export default validate
