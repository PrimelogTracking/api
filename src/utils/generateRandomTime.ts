function generateRandomTime(): Date {
  const startHour = 9;
  const endHour = 18;
  const randomHour = startHour + Math.floor(Math.random() * (endHour - startHour));
  const randomMinute = Math.floor(Math.random() * 60);
  const currentDate = new Date();
  
  currentDate.setHours(randomHour, randomMinute, 0, 0);

  return currentDate;
}
