import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsOpen } from 'redux/modal/modalSelector';

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // const isModalOpen = useSelector(selectIsOpen);
  // const dispatch = useDispatch();

  const open = () => {
    setIsOpen(true);
    //dispatch(open(isOpen));
  }

  const close = () => setIsOpen(false);

  const toggle = () => {
    setIsOpen(!isOpen)
//dispatch(open(isOpen));
  };

  return { isOpen, open, close, toggle };
};
