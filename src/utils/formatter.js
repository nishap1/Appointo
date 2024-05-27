const formatter = {
  formatDate(date) {
    return date.toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  },
  prettyDate() {},
  getDateRange(date) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    let range = {
      startDate: this.formatDate(date),
      endDate: this.formatDate(newDate),
    };
    return range;
  },
  formatDateTime(str) {
    const date = new Date(str);

    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Use 12-hour format
    };

    const formattedTime = date.toLocaleTimeString("en-US", options);
    return formattedTime;
  },
};

export default formatter;
