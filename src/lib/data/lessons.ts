import type { VideoLesson } from "@/types";

export const videoLessons: VideoLesson[] = [
  {
    id: "video-1",
    title: "Max/Min Video 1: IPL Dhamaka",
    hinglishTagline: "🏏 Game On, Yaar!",
    bodyText:
      "Aaj sikhenge King Kohli ke scoreboards se maximum aur minimum! Cricket ke runs mein chupaaya hai maths ka asli fun.",
    duration: "12:45",
    nextRoute: "/lesson/video-2",
  },
  {
    id: "video-2",
    title: "Max/Min Video 2: Bazaar Bhav",
    hinglishTagline: "🥭 Mango Season, Maths Season!",
    bodyText:
      "Vegetable market ke daam se seekhte hain range ka concept. Sabse mehenga aur sabse sasta — max aur min ki real life story.",
    duration: "10:30",
    nextRoute: "/concept/max",
  },
];

export const recapLesson = {
  id: "recap",
  title: "Max/Min Recap: Quick Summary",
  hinglishTagline: "🔁 Ek Baar Phir!",
  bodyText:
    "Poore lesson ki jhaanki ek baar aur. Max, Min, Range — teeno concepts ek saath yaad karo is chhote se video mein.",
  duration: "4:15",
  keyTakeaways: [
    "Maximum = sabse bada value in a data set",
    "Minimum = sabse chhota value in a data set",
    "Range = Maximum − Minimum",
    "Real life mein use hota hai: cricket, market prices, temperature",
  ],
  nextRoute: "/evaluation",
};
