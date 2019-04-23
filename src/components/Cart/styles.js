export default theme => ({
  wrCart: {
    '&.disabled': {
      display: 'none'
    }
  },
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: 9
  },
  cart: {
    position: 'relative',
    // width: '500px',
    width: 'fit-content',
    height: 'fit-content',
    margin: '65px auto',
    padding: '40px',
    backgroundColor: '#fff',
    zIndex: 9,

    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 9
  },
  close: {
    position: 'absolute',
    right: '15px',
    top: '15px',
    cursor: 'pointer'
  },
  title: {
    paddingBottom: '30px',
    fontSize: '24px',
    fontWeight: 600
  },
  cartProducts: {
    borderTop: '1px solid rgba(0,0,0,.2)',
    borderBottom: '1px solid rgba(0,0,0,.2)'
  },
  total: {
    paddingTop: '20px',
    textAlign: 'right',
    fontSize: '16px',
    fontWeight: 600
  },
  paymentIframe: {
    width: '500px',
    height: '500px'
  }
})
