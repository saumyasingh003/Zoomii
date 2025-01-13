import avatar1 from "../Public/images/avatar-1.jpeg";
import avatar2 from "../Public/images/avatar-2.jpeg";
import avatar3 from "../Public/images/avatar-3.png";
import avatar4 from "../Public/images/avatar-4.png";
import avatar5 from "../Public/images/avatar-5.png";
import home from "../Public/icons/Home.svg";
import upcoming from "../Public/icons/upcoming.svg";
import previous from "../Public/icons/previous.svg";
import video from "../Public/icons/Video.svg";
import personal from "../Public/icons/add-personal.svg";

export const sidebarLinks = [
  {
    label: "Home",
    imgUrl: home,
    route: "/",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: upcoming,
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: previous,
  },
  {
    label: "Recording",
    route: "/recording",
    imgUrl: video,
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: personal,
  },
];
export const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5];
