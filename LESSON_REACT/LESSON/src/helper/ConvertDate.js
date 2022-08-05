export const convertDate = (date) => {
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const dates = date.getDate();
  return `${month} ${dates} , ${year}`;
};
