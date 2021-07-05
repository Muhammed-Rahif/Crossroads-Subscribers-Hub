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
  /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

const urlRegexPattern =
  "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";

export {
  openUrlInNewTab,
  openLocationInGMap,
  emailRegexPattern,
  urlRegexPattern,
  clientStorageKey,
};
