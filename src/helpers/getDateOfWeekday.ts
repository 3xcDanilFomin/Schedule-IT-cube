export const getDateOfWeekday = (dayKey: string): Date | null => {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const today = new Date();
  const dayIndex = daysOfWeek.indexOf(dayKey.toLowerCase());

  if (dayIndex === -1) {
    console.error('Invalid day key');
    return null;
  }

  const currentDayIndex = today.getDay();
  const diff = dayIndex - currentDayIndex;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);

  return targetDate;
};
