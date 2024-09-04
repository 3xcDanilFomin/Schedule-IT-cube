import { useEffect, useState } from 'react';

import { month } from '../../assets/data/month';
import styles from './style.module.scss';

export const DateInfo = () => {
  const [curentDate, setCurentDate] = useState<string>('');

  useEffect(() => {
    const day: number = new Date().getDate();
    const curentMonth: string = month[+new Date().getMonth()];
    setCurentDate(`${day} ${curentMonth}`);
  }, []);

  return (
    <div className={styles['date']}>
      <span className={styles['date__current']}>{curentDate}</span>
      <span className={styles['date__schedule']}>Сегодня нет занятий</span>
    </div>
  );
};
