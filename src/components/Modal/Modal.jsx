import css from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useEffect, useState, useRef } from 'react';
import { Radio, Stack } from 'components/Radio/Radio';

const Modal = ({ close, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef();

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      close();
    }, 250);
  };

  const handleKeyEscape = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === backdropRef.current) {
      backdropRef.current.removeEventListener('click', handleBackdropClick);
      closeModal();
    }
  };

  useEffect(() => {
    setIsOpen(true);
    document.addEventListener('keydown', handleKeyEscape);
    backdropRef.current.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('keydown', handleKeyEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`${css.backdrop} ${!isOpen && css.isHidden}`}
      ref={backdropRef}
    >
      <div className={css.modal}>
        {children}
        <button className={css.closeBtn} onClick={closeModal}></button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
