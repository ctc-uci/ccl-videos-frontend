import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from 'shards-react';
import './AlertBanner.css';

const AlertBanner = () => {
  const { alerts } = useSelector(state => state.notifications);
  const [alert, setAlert] = useState({ theme: "", message: "" });
  const [showBanner, setShowBanner] = useState(false);

  const closeBanner = () => {
    setShowBanner(false);
  }

  // TODO: clear array after the timeout
  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShowBanner(true);
      setTimeout(() => {
        closeBanner();
      }, 6000);
    }
  }, [alerts]);

  const onClose = () => {
    closeBanner();
  };

  return showBanner ? (
    <Alert className="alert-banner" theme={alert.theme} dismissible={onClose} open={showBanner}>
      {alert.message}
    </Alert>
  ) : null;
};

export default AlertBanner;
