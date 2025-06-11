import { SidebarProps } from "@/interfaces";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconMessage,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

export default {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "placeholder",
  },
  primary: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "User Manager",
      url: "/user-manager",
      icon: IconUsers,
    },
    {
      title: "Message Channel",
      url: "/message-channel",
      icon: IconMessage,
    },
    {
      title: "Document Manager",
      url: "/documents",
      icon: IconFolder,
    },
    {
      title: "AI Assistant",
      url: "/ai-chat",
      icon: IconFileAi,
    },
  ],
  secondary: [
    {
      name: "Data Library",
      url: "/utilities/data-library",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "/utilities/reports",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "/utilities/word-assistant",
      icon: IconFileWord,
    },
    {
      name: "Insights & Analytics",
      url: "/utilities/analytics",
      icon: IconChartBar,
    },
    {
      name: "Media Center",
      url: "/utilities/media",
      icon: IconCamera,
    },
  ],
  default: [
    {
      title: "Quick Search",
      url: "/utilities/search",
      icon: IconSearch,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Support Center",
      url: "/support",
      icon: IconHelp,
    },
  ],
} satisfies SidebarProps;
