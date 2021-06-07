import { useEffect } from 'react';
import { bool, func, node } from 'prop-types';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalContext, { useModalContext } from './context';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  overflow-y: auto;
`;

const ModalOpacity = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const ModalContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  background: ${(props) => props.theme.palette.white};
  z-index: 2;
`;

function Modal({ open, onClose, children, animate, ...rest }) {
  const animation = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'trasnlateY(0)' : 'translateY(-100%)',
  });

  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <ModalContext.Provider value={{ onClose }}>
      {open && (
        <ModalWrapper>
          <ModalOpacity onClick={onClose} />
          <ModalContainer
            style={animate ? animation : { opacity: 1, transform: 'none' }}
            {...rest}
          >
            {children}
          </ModalContainer>
        </ModalWrapper>
      )}
    </ModalContext.Provider>
  );
}

Modal.propTypes = {
  children: node,
  open: bool,
  animate: bool,
  onClose: func,
};

Modal.defaultProps = {
  children: null,
  open: false,
  animate: true,
  onClose: null,
};

export const Head = styled(({ children, className, showCloseIcon }) => {
  const { onClose } = useModalContext();
  return (
    <div className={className}>
      {children}
      {showCloseIcon && <FontAwesomeIcon onClick={onClose} icon={faTimes} />}
    </div>
  );
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

Head.defaultProps = {
  children: null,
  className: null,
  showCloseIcon: true,
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

Modal.Head = Head;
Modal.Content = Content;

export default Modal;
