import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { withHandlers } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  ErrorMsg,
  WarningMsg,
  PleaseWait,
} from './components';

function NetworkStatus({ routerBack, renderHelper }) {
  return (
    <div>
      {renderHelper()}
      <div className="checkout__back-home-btn ">
        <button
          className="sweep-right"
          data-slug="/"
          type="button"
          onClick={routerBack}
        >
          <FontAwesome name="angle-double-left" />&nbsp;
          <IntlMsg id="checkout.action-btn.back-to-home" />
        </button>
      </div>
    </div>
  );
}

const NetworkStatusWithHandlers = withHandlers({
  renderHelper: ({ errors, loading, success, toast }) => () => {
    let { message } = errors;
    const { hard } = errors;
    // message = message[IntlLocale];
    const { soft } = errors;
    const showError = !!hard || !!soft || !!message.length || !!toast.message;

    if (!!toast.message) {
      message = toast.message;
    }
    // else if (!!toast.message[IntlLocale]) {
    //   message = toast.message[IntlLocale];
    // }

    const hardError = <ErrorMsg message={message} />;

    const softError = <WarningMsg message={message} />;

    const warningMsg = <WarningMsg message={message} />;

    const loadingMsg = <PleaseWait />;

    const successMsg = (
      <div className="checkout__successful-purchase">
        <div className="successful-purchase__title">
          <FontAwesome className="success-icon" name="check-circle" />&nbsp;
          <h2><IntlMsg id="checkout.submit.success.title" /></h2>
        </div>
        <br />
        <p>
          <IntlMsg id="checkout.submit.success.message" />&nbsp;
          <FontAwesome className="success-spinner-icon" name="spinner" pulse />
        </p>
      </div>
    );

    if (hard) return hardError;
    if (soft) return softError;
    if (toast.type === 'error') return hardError;
    if (toast.type === 'warning') return warningMsg;
    if (toast.type === 'success') return successMsg;
    if (!showError && loading) return loadingMsg;
    if (!showError && success) return successMsg;
    return '';
  },
})(NetworkStatus);
const { shape, string, bool, func } = PropTypes;
NetworkStatus.propTypes = {
  toast: shape({
    type: string,
    message: shape({
      en: string,
      ja: string,
    }),
  }).isRequired,
  errors: shape({
    hard: bool,
    soft: bool,
    messages: string,
  }).isRequired,
  loading: bool,
  routerBack: func.isRequired,
  renderHelper: func.isRequired,
};
NetworkStatus.defaultProps = {
  loading: false,
};
export default NetworkStatusWithHandlers;
