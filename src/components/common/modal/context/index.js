import { useContext, createContext } from 'react';

export const modalContextDefaults = {
  onClose: null,
  open: false,
};

export const ModalContext = createContext(modalContextDefaults);
export const useModalContext = () => useContext(ModalContext);

export default ModalContext;
