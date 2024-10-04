
import './deletepopup.css';  // Make sure to add the CSS to a separate file

const PrintPopup = ({ open, onClose, onAccept, onReject }) => {
  if (!open) return null; // Don't render the popup if it's not open

  return (
    <div className='background-blur'>
    <div className="cookies-card">
      <p className="cookie-heading">Print Confirmation</p>
      <p className="cookie-para">
        Do you want print?
      </p>
      <div className="button-wrapper">
        <button className="accept cookie-button" onClick={onAccept}>Yes</button>
        <button className="reject cookie-button" onClick={onReject}>No</button>
      </div>
      <button className="exit-button" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 162 162"
          className="svgIconCross"
        >
          <path
            strokeLinecap="round"
            strokeWidth="17"
            stroke="black"
            d="M9.01074 8.98926L153.021 153"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="17"
            stroke="black"
            d="M9.01074 153L153.021 8.98926"
          ></path>
        </svg>
      </button>
    </div>
    </div>
  );
};

export default PrintPopup;
