import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function PriceInfo({ price, sku, inStock }) {
  return (
    <div className="desc__price-row">
      <ul className="price-row__list">
        <li className="list--price">
          <h1>
            <FontAwesome name="usd" className="price__fa" />{'\u00A0'}{price}.00
          </h1>
        </li>
        <li className="list--tax">
          <div className="tax__tax--title">
            <p>+ Tax</p>
          </div>
          <div className="tax__shipping--title">
            <p>
              Free Shipping
            </p>
          </div>
        </li>
        <li className="list--stock">
          <div className="stock__sku--title">
            <p>SKU: {sku}</p>
          </div>
          <div className="stock__stock--title">
            <h3>{inStock ? 'IN STOCK' : 'OUT OF STOCK'}</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
const { string, bool } = PropTypes;
PriceInfo.propTypes = {
  id: string.isRequired,
  sku: string.isRequired,
  price: string.isRequired,
  inStock: bool.isRequired,
};
export default PriceInfo;
