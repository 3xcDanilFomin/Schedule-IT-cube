import { DateInfo } from '../DateInfo';
import { DateList } from '../DateList';
import { ScheduleList } from './ScheduleList';
import styles from './style.module.scss';

export const Schedule = () => {
  return (
    <main className={styles['schedule']}>
      <DateInfo />
      <DateList />
      <ScheduleList />
    </main>
  );
};
