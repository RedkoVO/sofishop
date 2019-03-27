export default () => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
    margin: '0 auto',
    padding: '20px 0',
    listStyle: 'none',

    '& li': {
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 900
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
    cursor: 'pointer'
  },
  user: {
    display: 'flex',
    right: '16px',
    position: 'absolute',
    color: '#9c9c9c'
  },
  logout: {
    marginLeft: '10px',
    padding: '4px 20px',
    color: '#fff',
    fontSize: '10px',
    background: '#4099ff',
    borderRadius: '10px',
    cursor: 'pointer'
  }
})
