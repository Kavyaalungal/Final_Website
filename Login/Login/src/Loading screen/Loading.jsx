import './loading.css' // Import the updated CSS

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src="https://media.licdn.com/dms/image/v2/C5603AQETLd8pauxLZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1647424252402?e=2147483647&v=beta&t=cxL9YZvuR6hFFl5TQVLGsHxgqsZcKCwNBXQKRKPA6kY" alt="Company Logo" className="logo" />
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
