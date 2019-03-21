export default () => ({
  root: {
    marginBottom: '90px',
    width: '360px'
  },
  picture: {
    width: '100%',
    height: '330px',
    cursor: 'pointer',

    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 700
  },
  price: {
    marginBottom: '20px',
    color: '#ff2e2e',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 400
  },
  addToCart: {
    display: 'block',
    marginBottom: '8px',
    margin: '0 auto',
    padding: '12px 30px',
    color: '#fff',
    fontSize: '14px',
    backgroundColor: '#11db03',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  },
  learnMore: {
    display: 'block',
    marginBottom: '8px',
    margin: '0 auto',
    padding: '12px 30px',
    color: '#000',
    fontSize: '14px',
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none'
    }
  }
})
