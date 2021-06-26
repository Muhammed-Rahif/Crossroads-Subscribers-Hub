import {
  AccessTime,
  CalendarToday,
  Code,
  GroupWork,
  LocationOn,
  Person,
  School,
  Work,
} from "@material-ui/icons";

function getBadgesList() {
  return ["member", "student", "contributor", "working"];
}

function getIcon(icon) {
  switch (icon) {
    case "member":
      return <Person />;
    case "developer":
      return <Code />;
    case "student":
      return <School />;
    case "contributor":
      return <GroupWork />;
    case "working":
      return <Work />;
    case "location":
      return <LocationOn />;
    case "date":
      return <CalendarToday />;
    case "time":
      return <AccessTime />;
    default:
      return null;
  }
}

export { getIcon, getBadgesList };
