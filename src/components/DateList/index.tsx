import { DateItem } from './DateItem';
import { daysOfWeek } from '../../assets/data/days';
import { schedule } from '../../assets/data/schedule';

import styles from './style.module.scss';
import { IDateInfo} from '../../types/types';

export const DateList: React.FC = () => {
  const activeScheduleDays = Object.entries(schedule).filter(
    ([, scheduleOfDay]) => Boolean(scheduleOfDay),
  );

  const activeDays = activeScheduleDays.map(([day]) => day as keyof IDateInfo);

  return (
    <div className={styles.date__list}>
      {activeDays.map((day, index) => (
        <DateItem
          key={day}
          dayOfMonth='1' 
          dayOfWeek={daysOfWeek[day]}
          dayName={activeScheduleDays[index][0]}
        />
      ))}
    </div>
  );
};
