import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return { isOpen: isModalOpen, open, close };
};

export default useModal;
