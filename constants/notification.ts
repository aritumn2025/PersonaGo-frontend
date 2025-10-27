type NotificationEntry = {
  title: string;
  description: string;
  link: string;
};

const NOTIFICATION: NotificationEntry[] = [
  {
    title: "投票のおねがい",
    description: "文化祭の投票にご協力ください！",
    link: "/user/info/other/vote",
  },
];

export { NOTIFICATION, type NotificationEntry };
