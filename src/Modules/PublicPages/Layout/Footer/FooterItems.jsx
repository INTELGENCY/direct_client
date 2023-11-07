import { SocialIcon } from "react-social-icons";
import pdf from "/pdf/dummy.pdf";

export const footerItems = [
  {
    heading: "About Us",
    list: [
      {
        label: "The Scheme",
        url: "/about/scheme",
      },
      {
        label: "The Team",
        url: "/about/team",
      },
      {
        label: "Dare to Dream",
        url: "/about/dare-to-dream",
      },
      {
        label: "Engagement of Startups",
        url: "/about/engagement-of-startups",
      },
    ],
  },
  {
    heading: "Projects",
    list: [
      {
        label: "Ongoing",
        url: "/profile/projects/ongoing",
      },
      {
        label: "Awarded",
        url: "/profile/projects/awarded",
      },
    ],
  },

  {
    heading: "THE SCHEME",
    list: [
      {
        label: "Direct",
        url: "/about/scheme/direct",
      },
      {
        label: "Eligibility",
        url: "/about/scheme/eligibility",
      },
      {
        label: "Benefits",
        url: "/about/scheme/benefits",
      },
    ],
  },
  {
    heading: "HELP",
    list: [
      {
        label: "Download Doc",
        url: pdf,
        type: "doc",
      },
      {
        label: "FAQ",
        url: "/resources/faqs",
      },
      {
        label: "News & Events",
        url: "/resources/newsandevents",
      },
      {
        label: "Contact Us",
        url: "/contact",
      },
    ],
  },
  {
    heading: "Features",
    list: [
      {
        label: "Group Chat",
        url: "/feature/groupchat",
      },
      {
        label: "Forms",
        url: "/feature/forms",
      },
      {
        label: "Live Chat",
        url: "/feature/livechat",
      },
    ],
  },
  {
    heading: "Resources",
    list: [
      {
        label: "Challans",
        url: "/resources/challans",
      },
      {
        label: "Watch a Demo",
        url: "/resources/demo",
      },
      {
        label: "Downloads",
        url: "/resources/downloads",
      },
    ],
  },

  {
    heading: "Get In Touch",
    description: "the quick fox jumps over the lazy dog",
    list: [
      {
        label: (
          <SocialIcon network="facebook" style={{ height: 40, width: 40 }} />
        ),
      },
      {
        label: (
          <SocialIcon network="instagram" style={{ height: 40, width: 40 }} />
        ),
      },
      {
        label: (
          <SocialIcon network="twitter" style={{ height: 40, width: 40 }} />
        ),
      },
      {
        label: (
          <SocialIcon network="youtube" style={{ height: 40, width: 40 }} />
        ),
      },
    ],
  },
];
