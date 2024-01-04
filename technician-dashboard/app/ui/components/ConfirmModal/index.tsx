import { ReactNode, memo } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Flex,
  Button,
} from '@chakra-ui/react';

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  isSubmitting?: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

const ConfirmModal = ({
  isOpen,
  title = '',
  description = '',
  children,
  isSubmitting = false,
  onClose,
  onSubmit,
}: ConfirmModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent borderRadius='md' p='4' minW='50%'>
      {title && <ModalHeader>{title}</ModalHeader>}
      <ModalCloseButton />
      <ModalBody>
        {description && <Text variant='textLg'>{description}</Text>}
        {children}
      </ModalBody>
      <ModalFooter as={Flex} justifyContent='center'>
        <Button variant='outline' isDisabled={isSubmitting} ml='auto' mr='4' onClick={onClose}>
          No
        </Button>
        <Button onClick={onSubmit} isLoading={isSubmitting}>
          Yes
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default memo(ConfirmModal);
