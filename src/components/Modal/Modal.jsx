import { useEffect } from 'react';

function Modal({ onClose, image }) {
  const esc = e => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', esc);

    return () => window.removeEventListener('keydown', esc);
  });
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
export default Modal;
