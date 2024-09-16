import { useContext, useEffect, useState } from 'react';

import { month } from '../../assets/data/month';
import { directionOptions } from '../../assets/data/directions';
import { ScheduleContext } from '../../context/ScheduleContext';
import styles from './style.module.scss';

export const DateInfo: React.FC = () => {
  const [formattedCurrentDate, setFormattedCurrentDate] = useState<string>('');

  const { currentDirection } = useContext(ScheduleContext);

  const directionLabel =
    directionOptions.find((direction) => direction.name === currentDirection)
      ?.label || 'Направление не выбрано';

  useEffect(() => {
    const day: number = new Date().getDate();
    const currentMonth: string = month[new Date().getMonth()];
    setFormattedCurrentDate(`${day} ${currentMonth}`);
  }, []);

  return (
    <div className={styles['date']}>
      <span className={styles['date__current']}>{formattedCurrentDate}</span>
      <span className={styles['date__direction']}>{directionLabel}</span>
    </div>
  );
};
