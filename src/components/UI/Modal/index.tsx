import { DirectionList } from '../../DirectionsList';
import styles from './style.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen
          ? [styles['modal'], styles['modal--open']].join(' ')
          : styles['modal']
      }
    >
      <DirectionList  setIsOpen={setIsOpen}/>
    </div>
  );
};
