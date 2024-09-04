import { useContext } from 'react';
import { ScheduleContext } from '../../../context/ScheduleContext';
import { schedule } from '../../../assets/data/schedule';
import { ILesson } from '../../../types/types';
import { ScheduleItem } from './ScheduleItem';
import styles from './style.module.scss';

export const ScheduleList = () => {
  const { currentDay } = useContext(ScheduleContext);

  const currentDaySchedule = currentDay as keyof typeof schedule;

  const currentSchedule: ILesson[] | null = currentDay
    ? schedule[currentDaySchedule] || null
    : null;

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
                directions={item.subject}
                office={item.roomNumber}
                group={item.groupName}
              />
            ))
          ) : (
            <h1>Выберите день недели</h1>
          )}
        </div>
      </ul>
    </div>
  );
};
