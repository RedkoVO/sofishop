export default theme => ({
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

    [theme.breakpoints.down('sm')]: {
      right: '25px',
      width: '55px',
      height: '55px'
    },

    '& img': {
      width: '40px',
      height: '40px',

      [theme.breakpoints.down('sm')]: {
        width: '30px',
        height: '30px'
      }
    }
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '100%',
    position: 'absolute',
    right: '-3px',
    bottom: '-3px',

    [theme.breakpoints.down('sm')]: {
      width: '22px',
      height: '22px',
      right: '-5px',
      bottom: '-5px',
      fontSize: '12px'
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
