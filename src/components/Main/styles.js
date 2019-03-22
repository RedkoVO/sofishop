export default () => ({
  root: {},
  cartPreview: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '100px',
    right: '50px',
    paddingBottom: '5px',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 0 10px 0 rgba(0,0,0,.2)',

    '& img': {
      width: '40px',
      height: '40px'
    }
  },
  cartImage: {
    width: '40px',
    height: '40px',
    padding: '18px 20px 22px',
    stroke: '#000'
  },
  cart: {
    '&.disabled': {
      display: 'none'
    }
  }
})
