import { useContext } from 'react';
import { IDateInfo } from '../../../types/types';
import { ScheduleContext } from '../../../context/ScheduleContext';
import styles from './style.module.scss';

interface DateItemProps extends IDateInfo {
  dayName: null | string;
}

export const DateItem: React.FC<DateItemProps> = ({
  dayOfMonth,
  dayOfWeek,
  dayName,
}) => {
  const { currentDay, updateCurrentDay } = useContext(ScheduleContext);

  const handleClick = (day: string | null): void => {
    if (day !== null) {
      updateCurrentDay(day);
    }
  };

  return (
    <div
      onClick={() => handleClick(dayName)}
      className={
        currentDay === dayName
          ? [styles['date__item'], styles['date__item--active']].join(' ')
          : styles['date__item']
      }
    >
      <span className={styles['date__day-month']}>{dayOfMonth}</span>
      <span className={styles['date__day-week']}>{dayOfWeek}</span>
    </div>
  );
};
