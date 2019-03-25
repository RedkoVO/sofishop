export default () => ({
  root: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    background: '#fff'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '65px'
  },
  return: {
    marginLeft: '15px',
    cursor: 'pointer'
  },
  close: {
    width: '30px',
    marginRight: '15px',
    cursor: 'pointer'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '40px'
  },
  img: {
    width: '560px',
    height: '560px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  wrDescription: {
    width: '560px'
  },
  title: {
    paddingBottom: '18px',
    fontSize: '24px',
    fontWeight: 700
  },
  price: {
    color: '#ff2e2e',
    fontSize: '20px',
    fontWeight: 400
  },
  button: {
    width: '110px',
    height: '45px',
    marginTop: '20px',
    marginBottom: '30px',
    color: '#ffffff',
    fontSize: '14px',
    backgroundColor: '#11db03',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#12ca05'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  description: {
    marginTop: '20px',
    fontSize: '14px',
    lineHeight: '24px'
  }
})
