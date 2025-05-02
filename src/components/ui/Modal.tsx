import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function (
  { children, onClose },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) dialogRef.current?.showModal();
    },
  }));

  return createPortal(
    <dialog className='modal' ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
});

export default Modal;
