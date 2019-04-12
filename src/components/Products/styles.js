export default theme => ({
  root: {},
  description: {
    padding: '90px 0',
    width: '760px',
    margin: '0 auto',
    color: '#858585',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 100,

    [theme.breakpoints.down('md')]: {
      width: '600px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '70px 10px'
    }
  },
  wrProducts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '640px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  wrDelivery: {
    padding: '90px 0',
    width: '584px',
    margin: '0 auto',
    lineHeight: '36px',

    [theme.breakpoints.down('md')]: {
      width: '640px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '70px 10px'
    }
  },
  title: {
    paddingBottom: '50px',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '42px'
  },
  delivery: {
    color: '#000',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 100
  }
})
