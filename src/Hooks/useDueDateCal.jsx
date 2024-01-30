const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const useDueDateCal = () => {
  return (durationInWeeks) => {
    const date = new Date();
    // Assuming a month has 4 weeks
    const durationInMonths = Math.floor(durationInWeeks / 4);
    //Remaining Days if weeks aren't divisible by 4
    const remainingDays = (durationInWeeks % 4) * 7;
    let finalDueDay = date.getDate() + remainingDays;

    if (finalDueDay > 31) {
      finalDueDay -= date.getDate();
    }

    let totalMonthsUntilDueDate = durationInMonths + date.getMonth();

    //Conditional to check if the duration exceeds the current year
    const doesItExceed = totalMonthsUntilDueDate > 12;
    if (doesItExceed) {
      let yearIncrement = 0;
      do {
        totalMonthsUntilDueDate -= 12;
        yearIncrement++;
      } while (totalMonthsUntilDueDate > 12);

      return `${months[totalMonthsUntilDueDate]} ${finalDueDay}, ${
        date.getFullYear() + yearIncrement
      }`;
    }
    return `${
      months[totalMonthsUntilDueDate]
    } ${finalDueDay}, ${date.getFullYear()}`;
  };
};
