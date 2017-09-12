import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { propTypes } from './assets/propValidation';
import './assets/css/styles.css';
import {
  FooterHdr,
  FooterList,
} from './components';

class Footer extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  render() {
    return (
      <div className="footer__container footer__container--landscape">
        <div className="footer__upper footer__upper--landscape">
          <div className="footer__upper--container footer__upper--container--landscape">
            <div className="footer__upper--grid footer__upper--grid--landscape w-row">
              <div className="grid__general-column w-col w-col-3">
                <FooterHdr
                  section="general"
                  title="home.footer.general.title"
                />
                <FooterList
                  section="general"
                  titles={['home.footer.general.contactUs', 'home.footer.general.vapeNews', 'home.footer.general.productReviews', 'home.footer.general.userStories']}
                />
              </div>
              <div className="grid__customer-column grid__customer-column--landscape w-col w-col-3">
                <FooterHdr
                  section="customer"
                  title="home.footer.customer.title"
                />

                <ul className="customer-column__list customer-column__list--landscape customer-column__list--tablet w-list-unstyled">
                  <li className="customer__list-item customer__list-item--landscape customer__list-item--tablet">
                    <a
                      className="general__list--link hover-bob"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMsg id="home.footer.customer.privacyPolicy" />
                    </a>
                  </li>
                  <li className="customer__list-item customer__list-item--landscape customer__list-item--tablet">
                    <a
                      className="general__list--link hover-bob"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMsg id="home.footer.customer.shippingPolicy" />
                    </a>
                  </li>
                  <li className="customer__list-item customer__list-item--landscape customer__list-item--tablet">
                    <a
                      className="general__list--link hover-bob"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMsg id="home.footer.customer.returnPolicy" />
                    </a>
                  </li>
                  <li className="customer__list-item customer__list-item--landscape customer__list-item--tablet">
                    <a
                      className="general__list--link hover-bob"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMsg id="home.footer.customer.nicotineDisclaimer" />
                    </a>
                  </li>
                  <li className="customer__list-item customer__list-item--landscape customer__list-item--tablet">
                    <a
                      className="general__list--link hover-bob"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMsg id="home.footer.customer.termsConditions" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__contact-column grid__contact-column--landscape w-col w-col-3">

                <FooterHdr section="contact" title="home.footer.contact.title" />

                <ul className="contact-column__list contact-column__list--landscape w-list-unstyled">

                  <li className="contact__list--item contact__list-item--landscape contact__list-item--tablet">
                    <FontAwesome name="phone" className="font-awesome--phone" />
                    <a
                      className="general__list--link general__list--link--tablet"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      080-4053-8791
                    </a>
                  </li>

                  <li className="contact__list--item contact__list-item--landscape contact__list-item--tablet">
                    <FontAwesome name="envelope" className="font-awesome--envelope" />

                    <a
                      className="general__list--link general__list--link--tablet"
                      data-ix="new-interaction"
                      href="/about"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      contact@nj2jp.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid__social-column w-col w-col-3">
                <FooterHdr section="social" title="home.footer.follow.title" />

                <div className="social__icon-container">
                  <div className="facebook-icon sweep-right">
                    <FontAwesome name="facebook" className="facebook-fa-icon" />
                  </div>
                  <div className="instagram-icon sweep-right">
                    <FontAwesome name="instagram" className="instagram-fa-icon" />
                  </div>
                </div>
                <div className="social__icon-container">
                  <div className="twitter-icon sweep-right">
                    <FontAwesome name="twitter" className="twitter-fa-icon" />
                  </div>
                  <div className="linkedin-icon sweep-right">
                    <FontAwesome name="linkedin" className="linkedin-fa-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__lower footer__lower--landscape footer__lower--tablet">
          <div className="footer__lower--container footer__lower--container--landscape">
            <div className="footer__lower-content footer__lower-content--landscape">
              <div className="copyright-company copyright-company--landscape copyright-company--tablet">
                <div className="footer__lower-copyright">Copyright</div>
                <FontAwesome name="copyright" className="footer__copyright" />
                <div className="footer__lower--company">2017</div>
              </div>
              <div className="footer_company footer_company--landscape footer_company--tablet">
                <div className="footer__lower-copyright">
                  <IntlMsg id="home.footer.madeWith.title" />
                </div>
                <FontAwesome name="heart" className="footer__heart" />
                <div className="footer__lower--company">
                  &nbsp;
                  <IntlMsg id="home.footer.madeWith.subTitle" />
                  &nbsp;
                  Stackinet LLC.
                </div>
              </div>
              <div className="payment-method payment-method--portrait payment-method--tablet">
                <img
                  alt="payment-method"
                  className="payment-method payment-method--portrait"
                  height="35"
                  sizes="(max-width: 479px) 267.390625px, 382px"
                  src="images/payment-methods.png"
                  srcSet="images/payment-methods.png 500w, images/payment-methods.png 765w"
                  width="382"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
