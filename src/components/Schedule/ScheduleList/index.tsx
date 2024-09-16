import { useContext } from 'react';

import { ScheduleContext } from '../../../context/ScheduleContext';
import { schedule } from '../../../assets/data/schedule';
import { ScheduleItem } from './ScheduleItem';
import { ISchedule, IWeeklySchedule } from '../../../types/types';
import { DateSelectionPrompt } from '../../DateSelectionPrompt';
import styles from './style.module.scss';

export const ScheduleList = () => {
  const { currentDay, currentDirection } = useContext(ScheduleContext);

  const currentSchedule =
    schedule[currentDirection as keyof ISchedule]?.[
      currentDay as keyof IWeeklySchedule
    ] || null;

  return (
    <div className={styles['schedule__wrapper']}>
      <h1 className={styles['schedule__title']}>Расписание</h1>
      <ul className={styles['schedule__list']}>
        <div className={styles['schedule__list-wrapper']}>
          {currentSchedule ? (
            currentSchedule.map((item) => (
              <ScheduleItem
                key={item.startTime}
                startTime={item.startTime}
                endTime={item.endTime}
                subject={item.subject}
                roomNumber={item.roomNumber}
                groupName={item.groupName}
              />
            ))
          ) : (
            <DateSelectionPrompt />
          )}
        </div>
      </ul>
    </div>
  );
};
