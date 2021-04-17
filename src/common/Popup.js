import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody } from 'shards-react';

const Popup = () => {
  const { popups } = useSelector(state => state.popups);
  const [popup, setPopup] = useState({ message: "" }); // see if you can pass in component/html string to useState
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  }

  // TODO: clear array after the timeout
  useEffect(() => {
    console.log("in Popup useEffect");
    if (popups.length > 0) {
      console.log("in Popup useEffect2");
      setPopup(popups[popups.length - 1]);
      setShowPopup(true);
    }
  }, [popups]);

  const onClose = () => {
    closePopup();
  };

  return showPopup ? (
    <Modal open={showPopup}>
      <ModalHeader>Header</ModalHeader>
      <ModalBody>{alert.message}</ModalBody>
    </Modal>
    // put in jenny's modal html
    // see why message isn't displaying
  ) : null;
};

export default Popup;
