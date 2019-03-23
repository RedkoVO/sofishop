export default () => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  picture: {
    display: 'flex',
    alignItems: 'center',
    width: '70px',
    height: '70px',

    '& img': {
      width: '100%'
    }
  },
  title: {
    width: '195px',
    paddingLeft: '10px',
    fontSize: '16px',
    fontWeight: 600
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '8px',
    width: '60px'
  },
  quantityIcon: {
    width: '15px',
    cursor: 'pointer'
  },
  price: {
    width: '75px'
  },
  remove: {
    width: '15px',
    cursor: 'pointer'
  }
})
