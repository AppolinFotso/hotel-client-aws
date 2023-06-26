import react from "react";

function LoadingPage(props) {
  return (
    <div className="loading">
      <p> Please wait!</p>
      <p>
        Page loading<span>...............</span>
      </p>
    </div>
  );
}

export default LoadingPage;
