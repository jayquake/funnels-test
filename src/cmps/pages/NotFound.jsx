import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    fetch("/api/log404", {
      method: "POST",
      body: JSON.stringify({
        url: window.location.href,
        timestamp: new Date().toISOString()
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch((err) => console.error("Error logging 404:", err));
  }, []);

  return <h1>404 - Not Found</h1>;
};

export default NotFound;
