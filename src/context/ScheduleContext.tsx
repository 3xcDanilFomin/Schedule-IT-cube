import React, { createContext, useState, ReactNode, useEffect } from 'react';

import { IScheduleContext } from '../types/types';

export const ScheduleContext = createContext<IScheduleContext>({
  currentDay: '',
  updateCurrentDay: () => {},
});

interface ScheduleProviderProps {
  children: ReactNode;
}

export const ScheduleProvider: React.FC<ScheduleProviderProps> = ({
  children,
}) => {
  const [currentDay, setCurrentDay] = useState<string>(() => {
    return JSON.parse(localStorage.getItem('currentDay') || '""');
  });

  const updateCurrentDay = (day: string | null) => {
    if (day !== null) {
      setCurrentDay(day);
      localStorage.setItem('currentDay', JSON.stringify(day));
    }
  };

  useEffect(() => {
    const storedDay = localStorage.getItem('currentDay');
    if (storedDay) {
      setCurrentDay(JSON.parse(storedDay));
    }
  }, []);

  return (
    <ScheduleContext.Provider value={{ currentDay, updateCurrentDay }}>
      {children}
    </ScheduleContext.Provider>
  );
};
