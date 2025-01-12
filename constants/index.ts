import avatar1 from "../Public/images/avatar-1.jpeg"
import avatar2 from "../Public/images/avatar-2.jpeg"
import avatar3 from "../Public/images/avatar-3.png"
import avatar4 from "../Public/images/avatar-4.png"
import avatar5 from "../Public/images/avatar-5.png"
import upcomingIcon from "../Public/icons/upcoming.svg"
import homeIcon from "../Public/icons/Home.svg"
import previousIcon from "../Public/icons/previous.svg"
import recordingIcon from "../Public/icons/recordings.svg"
import personalIcon from "../Public/icons/add-personal.svg"


export const sidebarLinks = [
  {
    label: "Home",
    imgUrl: homeIcon,
    route: "/",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: upcomingIcon,
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: previousIcon
  },
  {
    label: "Recording",
    route: "/recording",
    imgUrl: recordingIcon,
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: personalIcon,
  },
];
export const avatarImages = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
];
