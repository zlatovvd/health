import css from './Modal.module.css';

const Modal = () => {
  return (
    <div className={css.backdrop}>
    
      <div className={css.modal}>
        

        <button className={css.closeBtn}>
    {/* <svg height={20} width={20}>
        <use href='images/close-mobile.svg'></use>
    </svg> */}
</button>
      </div>
    </div>
  );
};

export default Modal;
