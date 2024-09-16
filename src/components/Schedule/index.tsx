import { Header } from '../Header';
import { DateList } from '../DateList';
import { ScheduleList } from './ScheduleList';
import { ScheduleSelectionPrompt } from './ScheduleSelectionPrompt';
import { useContext } from 'react';
import { ScheduleContext } from '../../context/ScheduleContext';
import styles from './style.module.scss';

export const Schedule = () => {
  const { currentDirection } = useContext(ScheduleContext);

  return (
    <main className={styles['schedule']}>
      <Header />
      {currentDirection !== "" ? (
        <>
          <DateList />
          <ScheduleList />
        </>
      ) : (
        <ScheduleSelectionPrompt />
      )}
    </main>
  );
};
