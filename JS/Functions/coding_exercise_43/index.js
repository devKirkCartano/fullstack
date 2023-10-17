// Days Of The Week Exercise

// DEFINE YOUR FUNCTION BELOW:

function returnDay(numOfDay) {
  const dayOfTheWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  if (numOfDay >= 1 && numOfDay <= 7) {
    return dayOfTheWeek[numOfDay];
  } else {
    return null;
  }
}

returnDay(1);
