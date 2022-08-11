const today = new Date();
const day = today.getDate();
const month = today.getMonth();
let nextDay = new Date(today);
nextDay.setDate(today.getDate() + 1);
let followingDay = new Date(nextDay);
followingDay.setDate(nextDay.getDate() + 1);
export const daysToShow = [
  {
    day: day,
    month: month + 1,
    status: 'Hôm nay',
    fullform:
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear(),
  },
  {
    day: nextDay.getDate(),
    month: nextDay.getMonth() + 1,
    status: 'Ngày mai',
    fullform:
      nextDay.getDate() +
      '/' +
      (nextDay.getMonth() + 1) +
      '/' +
      nextDay.getFullYear(),
  },
  {
    day: followingDay.getDate(),
    month: followingDay.getMonth() + 1,
    status: 'Ngày kia',
    fullform:
      followingDay.getDate() +
      '/' +
      (followingDay.getMonth() + 1) +
      '/' +
      followingDay.getFullYear(),
  },
  {
    day: null,
    month: null,
    status: '',
    fullform: null,
  },
];
