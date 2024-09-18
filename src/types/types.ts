export interface IDateInfo {
  dayOfWeek: string;
  dayOfMonth: number | null;
}

export interface ILesson {
  startTime: string;
  endTime: string;
  subject: string;
  roomNumber: number;
  groupName: string;
}

export type IDailySchedule = ILesson[] | null;

export interface IWeeklySchedule {
  monday: IDailySchedule;
  tuesday: IDailySchedule;
  wednesday: IDailySchedule;
  thursday: IDailySchedule;
  friday: IDailySchedule;
  saturday: IDailySchedule;
  sunday: IDailySchedule;
}

export interface ISchedule {
  robotics: IWeeklySchedule;
  web: IWeeklySchedule;
  cyberСlub: IWeeklySchedule;
}

export interface IWeekDays {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface IScheduleContext {
  currentDirection: string;
  updateCurrentDirection: (direction: string) => void;
  currentDay: string;
  updateCurrentDay: (day: string) => void;
}

export interface IDirection {
  id: number;
  label: string;
  name: string;
}
