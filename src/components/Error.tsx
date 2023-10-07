import React from "react";
import { useNavigate } from "react-router-dom";

export const Error: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="layout error">
      <center> Sorry . But the page you requested does not exist</center>
      <center>
        <button onClick={() => navigate('/')}>
          Click here to Redirect to an existing page
        </button>
      </center>
    </div>
  );
};

export default Error;
