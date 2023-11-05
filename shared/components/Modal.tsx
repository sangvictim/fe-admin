import { Modal as MantineModal, ModalProps } from "@mantine/core";
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";

export interface ModalRef {
  openModal(): void;
  closeModal(): void;

}
const Modal: ForwardRefRenderFunction<ModalRef,
  {
    children: ReactNode;
    onClose?: () => void;
  } & Omit<ModalProps, "opened">
> = ({ children, onClose = () => { }, ...props }, ref) => {
  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    },
    closeModal() {
      setOpen(false);
    }
  }));
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  return (
    <MantineModal
      opened={open}
      onClose={handleClose}
      withCloseButton={false}
      closeOnClickOutside={true}
      centered={true}
      {...props}
    >
      {children}
    </MantineModal>
  );
};
export default forwardRef(Modal);