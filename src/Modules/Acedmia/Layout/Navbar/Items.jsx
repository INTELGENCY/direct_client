import {
  Home,
  FolderCopy,
  ContactPage,
  Info as InfoIcon,
  BubbleChart,
  Collections,
  VideoLabel,
  Quiz,
  Newspaper,
  Article,
  Groups,
  Engineering,
  Route,
  Api,
  SettingsSystemDaydream,
} from "@mui/icons-material";
export const items = [
  {
    label: "Home",
    url: "/",
    type: "normal",
    icon: <Home />,
  },

  {
    label: "Resources",
    type: "dropdown",
    icon: <BubbleChart />,

    children: [
      {
        label: "Documentation",
        url: "/resources/about",
        type: "normal",
        icon: <Article />,
      },
      {
        label: "Tutorial",
        url: "/resources/tutorial",
        type: "normal",
        icon: <VideoLabel />,
      },
      {
        label: "FAQs",
        url: "/resources/faqs",
        type: "normal",
        icon: <Quiz />,
      },
      {
        label: "News and Events",
        url: "/resources/newsandevents",
        type: "normal",
        icon: <Newspaper />,
      },
      {
        label: "Gallery",
        url: "/resources/gallery",
        type: "normal",
        icon: <Collections />,
      },
    ],
  },

  {
    label: "About",
    type: "dropdown",
    icon: <InfoIcon />,
    children: [
      {
        label: "The Scheme",
        url: "/about/scheme",
        type: "normal",
        icon: <Route />,
      },
      {
        label: "The Team",
        url: "/about/team",
        type: "normal",
        icon: <Groups />,
      },
      {
        label: "Dare to Dream",
        url: "/about/dare-to-dream",
        type: "normal",
        icon: <SettingsSystemDaydream />,
      },
      {
        label: "Engagement of Startups",
        url: "/about/engagement-of-startups",
        type: "normal",
        icon: <Engineering />,
      },
    ],
  },

  {
    label: "Contact Us",
    url: "/contact",
    type: "normal",
    icon: <ContactPage />,
  },
  {
    label: "Direct Objectives",
    url: "/about/objectives",
    type: "normal",
    icon: <Api />,
  },
];
