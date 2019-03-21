import compose from 'recompose/compose'
import { withHandlers, lifecycle, withProps, pure } from 'recompose'
import { connect } from 'react-redux'

import Products from '../../components/Products'

// import { fetchProducts } from '../../redux/actions/products'
import { addProduct } from '../../redux/actions/cart'

const tmpProducts = [
  {
    currencyFormat: 'грн',
    currencyId: 'грн',
    description: '4 MSL',
    id: 1,
    price: 1444,
    title: 'Cat Tee Black T-Shirt'
  },
  {
    currencyFormat: 'грн',
    currencyId: 'грн',
    description: '4 MSL',
    id: 2,
    price: 999,
    title: 'Cat Tee Black T-Shirt'
  },
  {
    currencyFormat: 'грн',
    currencyId: 'грн',
    description: '4 MSL',
    id: 3,
    price: 1200,
    title: 'Cat Tee Black T-Shirt'
  },
  {
    currencyFormat: 'грн',
    currencyId: 'грн',
    description: '4 MSL',
    id: 4,
    price: 1500,
    title: 'Cat Tee Black T-Shirt'
  },
  {
    currencyFormat: 'грн',
    currencyId: 'грн',
    description: '4 MSL',
    id: 5,
    price: 1700,
    title: 'Cat Tee Black T-Shirt'
  }
]

// const mapStateToProps = state => ({
//   products: state.products.products
// })

export default compose(
  connect(),
  withHandlers({
    handleAddProduct: ({ dispatch }) => product => {
      dispatch(addProduct(product))
    }
  }),
  // lifecycle({
  //   componentDidMount() {
  //     const { dispatch } = this.props

  //     dispatch(fetchProducts())
  //   }
  // }),
  withProps(() => ({ products: tmpProducts })),
  pure
)(Products)
