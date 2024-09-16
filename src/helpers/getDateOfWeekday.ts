// export const getDateOfWeekday = (dayKey: string): string | null => {
//   const daysOfWeek = [
//     'sunday',
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//   ] as const;

//   const dayIndex = daysOfWeek.indexOf(dayKey.toLowerCase() as typeof daysOfWeek[number]);

//   if (dayIndex === -1) {
//     console.error('Invalid day key');
//     return null;
//   }

//   const today = new Date();
//   const currentDayIndex = today.getDay();
//   const diff = dayIndex - currentDayIndex;

//   const targetDate = new Date(today);
//   targetDate.setDate(today.getDate() + diff);

//   const day = String(targetDate.getDate()).padStart(2, '0');
//   const month = String(targetDate.getMonth() + 1).padStart(2, '0');

//   return `${day}.${month}`;
// };

export const getDateOfWeekday = (dayKey: string): number | null => {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ] as const;

  const dayIndex = daysOfWeek.indexOf(dayKey.toLowerCase() as typeof daysOfWeek[number]);

  if (dayIndex === -1) {
    console.error('Invalid day key');
    return null;
  }

  const today = new Date();
  const currentDayIndex = today.getDay();
  const diff = dayIndex - currentDayIndex;

  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);

  return targetDate.getDate();
};

