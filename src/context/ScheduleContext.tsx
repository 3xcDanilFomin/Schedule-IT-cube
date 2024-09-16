import React, { createContext, useState, ReactNode } from 'react';
import { IScheduleContext } from '../types/types';

const getLocalStorageValue = (key: string, defaultValue: string) => {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
};

const setLocalStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const ScheduleContext = createContext<IScheduleContext>({
  currentDirection: '',
  updateCurrentDirection: () => {},
  currentDay: '',
  updateCurrentDay: () => {},
});

interface ScheduleProviderProps {
  children: ReactNode;
}

export const ScheduleProvider: React.FC<ScheduleProviderProps> = ({
  children,
}) => {
  const [currentDirection, setCurrentDirection] = useState<string>(() =>
    getLocalStorageValue('currentDirection', ''),
  );

  const [currentDay, setCurrentDay] = useState<string>(() =>
    getLocalStorageValue('currentDay', ''),
  );

  const updateCurrentDay = (day: string) => {
    setCurrentDay(day);
    setLocalStorageValue('currentDay', day);
  };

  const updateCurrentDirection = (direction: string) => {
    setCurrentDirection(direction);
    setLocalStorageValue('currentDirection', direction);
    updateCurrentDay('');
  };

  return (
    <ScheduleContext.Provider
      value={{
        currentDirection,
        updateCurrentDirection,
        currentDay,
        updateCurrentDay,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
