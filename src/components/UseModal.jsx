import { useState } from 'react';
import '../views/base/patient/Patient.css'

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSize, setModalSize] = useState('xl');

  const toggleModal = (title, content, size = 'xl') => {
    setModalTitle(title);
    setModalContent(content);
    setModalSize(size);
    setModal(true);  
  };

  const closeModal = () => setModal(false); 

  return { modal, modalContent, modalTitle, modalSize, toggleModal, closeModal };
};

export default useModal;

