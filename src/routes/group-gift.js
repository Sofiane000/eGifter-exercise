import { lazy } from "react";

const GroupGift = [
  {
    path: "/",
    redirect: true,
    to: "/groupGift/startGroupGift"
  },
  {
    path: "/groupGift/startGroupGift",
    component: lazy(() => import("../pages/groupGift/group-gift-form"))
  },
  {
    path: "/groupGift/submitGroupGift",
    component: lazy(() => import("../pages/groupGift/preview-group-gift"))
  },

];
export default GroupGift;
