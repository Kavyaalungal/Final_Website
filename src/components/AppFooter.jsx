import React from 'react';
import { CFooter } from '@coreui/react';
import './AppFooter.css'; // Import the CSS file

const AppFooter = () => {
  return (
    <CFooter className="footer">
      <div className="left-content">
        <span className="ms-1"></span>
      </div>
      <div className="right-content">
        <span className="me-1">Powered by</span>
        <a href="https://iconinfoware.com/" target="_blank" rel="noopener noreferrer">
          Icon Infoware Admin &amp; Dashboard 
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
