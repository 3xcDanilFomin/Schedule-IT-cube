import { useState } from 'react';

import { DateInfo } from '../DateInfo';
import { Hamburger } from '../UI/Hamburger';
import { Modal } from '../UI/Modal';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleClickHamburger = (): void => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <header className={styles['header']}>
      <DateInfo />
      <Hamburger isOpen={isOpenModal} setIsOpen={handleClickHamburger} />
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
    </header>
  );
};
