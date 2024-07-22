import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const BlueToastButton = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Mostrar Toast azul
      </button>
      <Toast isOpen={showToast} style={{ backgroundColor: 'blue', color: 'white' }}>
        <ToastHeader>Información</ToastHeader>
        <ToastBody>Este es un toast azul!</ToastBody>
      </Toast>
    </div>
  );
};

export default BlueToastButton;