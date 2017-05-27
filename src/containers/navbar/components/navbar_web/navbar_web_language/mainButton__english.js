import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarLanguageMainButtonEnglish() {
  return (
    <span className="language-main-button-us-parent">
      <div className="language-main-button-us">
        <img src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-react/english-flag.png" alt="US Flag" className="language-main-button-us-flag" />
      </div>
      <div className="language-main-button-us-title">
        <span>ENGLISH</span>
      </div>
      <div className="language-main-button-us-chevron">
        <FontAwesome
          name="angle-down" className="language-main-button-us-chevron-icon"
        />
      </div>
    </span>
  );
}
