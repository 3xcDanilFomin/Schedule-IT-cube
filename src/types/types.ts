export interface IDateInfo {
  dayOfWeek: string;
  dayOfMonth: string;
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
  currentDay: string;
  updateCurrentDay: (day: string | null) => void;
}
