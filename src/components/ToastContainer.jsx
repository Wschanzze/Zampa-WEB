import React from 'react';
import { useApp } from '../context/AppContext';

const ToastContainer = () => {
  const { toasts } = useApp();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
