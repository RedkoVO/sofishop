export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  picture: {
    display: 'flex',
    alignItems: 'center',
    width: '70px',
    height: '70px',

    [theme.breakpoints.down('sm')]: {
      width: '55px',
      height: '55px'
    },

    '& img': {
      width: '100%'
    }
  },
  title: {
    width: '195px',
    paddingLeft: '10px',
    fontSize: '16px',
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {
      width: '105px',
      fontSize: '12px',
      paddingLeft: 0
    }
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '8px',
    width: '60px',

    [theme.breakpoints.down('sm')]: {
      paddingRight: '2px'
    }
  },
  quantityIcon: {
    width: '15px',
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      width: '12px'
    }
  },
  price: {
    width: '75px',

    [theme.breakpoints.down('sm')]: {
      width: '60px',
      fontSize: '12px'
    }
  },
  remove: {
    width: '15px',
    cursor: 'pointer'
  }
})
