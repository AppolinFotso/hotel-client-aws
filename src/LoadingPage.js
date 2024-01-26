import react from "react";
import Hotel from "./Images/Hotel-logo.png";

function LoadingPage(props) {
  return (
    <div className="loading">
      <img src={Hotel} className="loading-image" />
    </div>
  );
}

export default LoadingPage;
