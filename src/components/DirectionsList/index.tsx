import { useContext } from 'react';

import { DirectionItem } from './DirectionsItem';
import { directionOptions } from '../../assets/data/directions';
import styles from './styles.module.scss';
import { ScheduleContext } from '../../context/ScheduleContext';

interface DirectionsListProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const DirectionList: React.FC<DirectionsListProps> = ({ setIsOpen }) => {
  const { currentDirection, updateCurrentDirection } =
    useContext(ScheduleContext);

  const handleClickDirection = (direction: string): void => {
    setIsOpen(false);
    updateCurrentDirection(direction);
  };

  return (
    <ul className={styles['directions']}>
      {directionOptions.map((direction) => (
        <DirectionItem
          isActive={currentDirection === direction.name}
          key={direction.id}
          label={direction.label}
          onClickButton={() => handleClickDirection(direction.name)}
        />
      ))}
    </ul>
  );
};
