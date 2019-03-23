export default () => ({
  root: {},
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    paddingBottom: '5px',
    fontSize: '16px',
    fontWeight: 300
  },
  field: {
    padding: '0 20px',
    marginBottom: '20px',
    height: '55px',
    color: '#000000',
    fontSize: '16px',
    border: '1px solid #000000',

    '&.input-error': {
      border: '1px solid red'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  submit: {
    marginTop: '20px',
    height: '60px',
    color: '#ffffff',
    fontSize: '16px',
    backgroundColor: '#000000',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  }
})
