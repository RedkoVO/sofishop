import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import withStyles from '@material-ui/core/styles/withStyles'

import CloseIcon from '../../assets/images/close-preview.png'

import './styles.css'
import styles from './styles'

const ProductPreview = ({
  classes,
  product,
  handleClosePreview,
  handleAddProduct
}) => {
  const settings = {
    customPaging: i => {
      return (
        <div className={classes.priviewSlider}>
          <img src={product.images[i]} alt="" />
        </div>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.return} onClick={() => handleClosePreview()}>
          More products
        </div>
        <img
          className={classes.close}
          onClick={() => handleClosePreview()}
          src={CloseIcon}
          alt=""
        />
      </div>
      <div className={classes.content}>
        <div className={classes.img}>
          {product.images[1] ? (
            <Slider {...settings}>
              {product.images.map((item, index) => (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={product.images[0]} alt="" />
          )}
        </div>

        <div className={classes.wrDescription}>
          <div className={classes.title}>{product.title}</div>
          <div className={classes.price}>{product.price} грн</div>
          <button
            className={classes.button}
            onClick={() => handleAddProduct(product)}
          >
            Купить
          </button>
          <div className={classes.description}>{product.description}</div>
        </div>
      </div>
    </div>
  )
}

ProductPreview.propTypes = {
  classes: PropTypes.object,
  product: PropTypes.object,
  handleClosePreview: PropTypes.func,
  handleAddProduct: PropTypes.func
}

export default withStyles(styles)(ProductPreview)
