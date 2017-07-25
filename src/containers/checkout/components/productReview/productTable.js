import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class ProductReviewTable extends PureComponent {
  static propTypes = {
    cart: arrayOf(object).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ cart: [...nextProps] }));
  }

  renderTableRow = (cart) => {
    console.log('%ccart', 'background:lime;', cart);
    return cart.map(({ _id, qty, product }) => {
      return (
        <tr className="body__row" key={_id}>
          <td className="body__row--product-name">
            <div className="image__container">
              <img alt="Juice" className="image--source" />
            </div>
            <div className="description__container">
              <p>{product.title}</p>
              <p>Nicotine Strength: <i>{product.nicotineStrength}</i></p>
            </div>
          </td>
          <td className="body__row--product-qty">
            <div className="qty--container">
              <p>3</p>
            </div>
          </td>
          <td className="body__row--product-subtotal">
            <div className="product-subtotal-container">
              <p>
                <FontAwesome name="usd" />{'\u00A0'}
                {Number(product.price) * qty}
              </p>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    const {
      cart,
    } = this.props;

    return (
      <table className="table__container">
        <thead className="table__header">
          <tr className="header__row">
            <th className="header__row--product-name">Product</th>
            <th className="header__row--qty">Qty</th>
            <th className="header__row--subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {this.renderTableRow(cart)}
        </tbody>
      </table>
    );
  }
}

ProductReviewTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductReviewTable;
