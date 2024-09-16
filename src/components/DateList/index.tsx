import { DateItem } from './DateItem';
import { daysOfWeek } from '../../assets/data/days';
import { schedule } from '../../assets/data/schedule';
import { getDateOfWeekday } from '../../helpers/getDateOfWeekday';

import styles from './style.module.scss';
import { useContext } from 'react';
import { ScheduleContext } from '../../context/ScheduleContext';

export const DateList: React.FC = () => {
  const { currentDirection } = useContext(ScheduleContext);

  const activeScheduleDays = Object.entries(
    schedule[currentDirection as keyof typeof schedule],
  ).filter(([, scheduleOfDay]) => Boolean(scheduleOfDay));

  const activeDays = activeScheduleDays.map(([day]) => day);

  return (
    <div className={styles.date__list}>
      {activeDays.map((day) => (
        <DateItem
          key={day}
          dayOfMonth={getDateOfWeekday(day)}
          dayOfWeek={daysOfWeek[day as keyof typeof daysOfWeek]}
          dayName={day}
        />
      ))}
    </div>
  );
};
