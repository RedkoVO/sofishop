const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'error.required'
  }

  if (!values.email) {
    errors.email = 'error.required'
  }

  if (!values.phone) {
    errors.phone = 'error.required'
  }

  return errors
}

export default validate
