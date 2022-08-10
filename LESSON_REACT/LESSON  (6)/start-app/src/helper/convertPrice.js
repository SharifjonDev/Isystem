export const convertPrice = (price) => {
  const options = {
    style: "currency",
    currency: "UZS",
  };
  return new Intl.NumberFormat(navigator.language, options).format(price);
};
