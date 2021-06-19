const clientStorageKey = "CrossroadsSubscribersHub";
const openUrlInNewTab = (url) => {
  window.open(url, "_blank").focus();
};
const openLocationInGMap = (locationName) => {
  window
    .open("https://www.google.co.in/maps/search/" + locationName, "_blank")
    .focus();
};
const emailRegexPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export {
  openUrlInNewTab,
  openLocationInGMap,
  emailRegexPattern,
  clientStorageKey,
};
