import { DateItem } from './DateItem';
import { daysOfWeek } from '../../assets/data/days';
import { schedule } from '../../assets/data/schedule';

import styles from './style.module.scss';

export const DateList: React.FC = () => {
  const activeScheduleDays = Object.entries(schedule).filter(
    ([, scheduleOfDay]) => Boolean(scheduleOfDay),
  );

  const activeDays = activeScheduleDays.map(([day]) => day);

  return (
    <div className={styles.date__list}>
      {activeDays.map((day) => (
        <DateItem
          key={day}
          dayOfMonth="1"
          dayOfWeek={daysOfWeek[day as keyof typeof daysOfWeek]}
          dayName={day}
        />
      ))}
    </div>
  );
};
