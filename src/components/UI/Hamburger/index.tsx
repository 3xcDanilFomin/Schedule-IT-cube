import styles from './style.module.scss';

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen
          ? [styles['hamburger'], styles['hamburger--open']].join(' ')
          : styles['hamburger']
      }
      onClick={() => setIsOpen()}
    >
      <div className={styles['hamburger__line']}></div>
      <div className={styles['hamburger__line']}></div>
      <div className={styles['hamburger__line']}></div>
    </div>
  );
};
