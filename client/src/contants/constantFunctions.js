const openUrlInNewTab = (url) => {
  window.open(url, "_blank").focus();
};
const openLocationInGMap = (locationName) => {
  window
    .open("https://www.google.co.in/maps/search/" + locationName, "_blank")
    .focus();
};
export { openUrlInNewTab, openLocationInGMap };
