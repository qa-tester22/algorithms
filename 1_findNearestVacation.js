//код для задачи по поиску ближайшей турпутевки:

function findNearestVacation(dates, durations, targetDate) {
    let leftIndex = 0;
    let rightIndex = dates.length - 1;
  
    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      const middleDate = new Date(dates[middleIndex]);
      const endDate = new Date(middleDate);
      endDate.setDate(endDate.getDate() + durations[middleIndex]);
  
      if (middleDate <= new Date(targetDate) && endDate >= new Date(targetDate)) {
        return {
          nearestVacationDate: dates[middleIndex],
          vacationDuration: durations[middleIndex],
        };
      } else if (middleDate < new Date(targetDate)) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  
    // Return the nearest vacation (either to the right or left)
    if (rightIndex < 0) {
      return {
        nearestVacationDate: dates[leftIndex],
        vacationDuration: durations[leftIndex],
      };
    } else if (leftIndex >= dates.length) {
      return {
        nearestVacationDate: dates[rightIndex],
        vacationDuration: durations[rightIndex],
      };
    } else {
      const leftDate = new Date(dates[leftIndex]);
      const rightDate = new Date(dates[rightIndex]);
  
      return (
        rightDate - new Date(targetDate) < new Date(targetDate) - leftDate
      ) ? {
        nearestVacationDate: dates[rightIndex],
        vacationDuration: durations[rightIndex],
      } : {
        nearestVacationDate: dates[leftIndex],
        vacationDuration: durations[leftIndex],
      };
    }
  }
  
  // Example usage:
  const vacationDates = ["2023-01-01", "2023-03-15", "2023-07-30", "2023-12-25"];
  const vacationDurations = [7, 14, 10, 21];
  //const targetDate = "2023-06-01";
  //const targetDate = "2023-06-06";
  // const targetDate = "2023-12-26";
  //const targetDate = "2022-12-26";
  const targetDate = "2023-12-24";
  
  const result = findNearestVacation(vacationDates, vacationDurations, targetDate);
  console.log(result);
  // { nearestVacationDate: '2023-03-15', vacationDuration: 14 } - 2023-06-01
  // { nearestVacationDate: '2023-03-15', vacationDuration: 14 } - 2023-06-06
  // { nearestVacationDate: '2023-12-25', vacationDuration: 21 } - "2023-12-26"
  // { nearestVacationDate: '2023-01-01', vacationDuration: 7 } - "2022-12-26"
  // { nearestVacationDate: '2023-07-30', vacationDuration: 10 } - "2023-12-24"
  
  // Этот код находит ближайшую турпутевку, которая заканчивается не позже указанной даты, в отсортированных массивах дат и продолжительностей отпуска. используем объект `Date`.