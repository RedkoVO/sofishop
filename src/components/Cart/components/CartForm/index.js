import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../App/components/InputField'

import styles from './styles'

const CartForm = ({ classes, onSubmit }) => (
  <div className={classes.root}>
    <Form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.label}>Ваше имя</div>
      <Field
        id="name"
        name="name"
        type="text"
        className={classes.field}
        component={InputField}
      />
      <div className={classes.label}>Ваш Email</div>
      <Field
        id="email"
        name="email"
        type="email"
        className={classes.field}
        component={InputField}
      />
      <div className={classes.label}>Ваш телефон</div>
      <Field
        id="phone"
        name="phone"
        type="text"
        className={classes.field}
        component={InputField}
      />
      <div className={classes.label}>Ваш комментарий</div>
      <Field
        id="comment"
        name="comment"
        type="text"
        className={classes.field}
        component={InputField}
      />

      <button type="submit" className={classes.submit}>
        Оформить заказ
      </button>
    </Form>
  </div>
)

CartForm.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default withStyles(styles)(CartForm)
