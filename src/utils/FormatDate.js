export const FormatDate = (date) => {
  const currentDate = new Date();

  // console.log(currentDate);
  // Specify the locale and options for formatting
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );
  return formattedDate;
};
