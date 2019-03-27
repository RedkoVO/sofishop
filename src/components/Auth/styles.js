export default () => ({
  root: {},
  overlay: {
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9
  },
  form: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    padding: '30px',
    width: '500px',
    height: 'fit-content',
    backgroundColor: '#fff',
    borderRadius: '10px',
    zIndex: 9
  },
  title: {
    paddingBottom: '25px',
    fontSize: '20px',
    textAlign: 'center'
  },
  field: {
    padding: '10px',
    border: '1px solid #d8d8d8',
    borderRadius: '5px',
    fontSize: '14px',
    marginBottom: '15px',

    '&:focus': {
      outline: 'none'
    }
  },
  submit: {
    color: '#000',
    margin: '0 auto',
    border: '1px solid #000',
    cursor: 'pointer',
    display: 'block',
    padding: '12px 50px',
    fontSize: '14px',
    marginTop: '8px',
    borderRadius: '5px',

    '&.disabled': {},
    '&:focus': {
      outline: 'none'
    }
  }
})
