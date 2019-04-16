export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',

    [theme.breakpoints.down('md')]: {
      height: 'inherit'
    }
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
    margin: '0 auto',
    padding: '20px 0',
    listStyle: 'none',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
      paddingTop: '60px'
    },

    '& li': {
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 900,

      [theme.breakpoints.down('md')]: {
        paddingBottom: '20px'
      }
    }
  },
  menuItem: {
    color: '#000',
    textDecoration: 'none'
  },
  auth: {
    padding: '4px 20px',
    marginRight: '20px',
    color: '#fff',
    background: '#4099ff',
    borderRadius: '10px',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: '20px',
      left: 0,
      right: 0,
      width: '128px',
      margin: 'auto'
    }
  },
  user: {
    display: 'flex',
    right: '16px',
    position: 'absolute',
    color: '#9c9c9c',

    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
      top: '20px',
      right: 0
    }
  },
  logout: {
    marginLeft: '10px',
    padding: '4px 20px',
    color: '#fff',
    fontSize: '10px',
    background: '#4099ff',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  logo: {
    position: 'absolute',
    width: '50px',
    top: '10px',
    left: '50px',

    [theme.breakpoints.down('sm')]: {
      left: '10px'
    },

    '& img': {
      width: '100%'
    }
  }
})
