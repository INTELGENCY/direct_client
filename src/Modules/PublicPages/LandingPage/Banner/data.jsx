const getimage = (src, flag) => {
  return `/assets/landingbanners/${src}`;
};
export const data = [
  {
    image: getimage("combine_banner.png"),
    title: `Seminar on "Advancing National Security through Indigenous Technology Innovation and Collaboration"/Defence Technologies tentatively on 15th Oct 2023 at NUST`,
    description: `The event is proposed to showcase the technology development capabilities and capacity of the Hi-technology SMEs and Start-ups housed at NSTP. To kick-start a national discourse on indigenization of technologies in an increasingly stringent economic landscape.
Will provide networking opportunity to technology developers, entrepreneurs, policy makers and academicians to find avenues of collaboration for
exchange and flow of knowledge.`,
    type: "blog",
    link: "/blog/Experts are here solve your business problem.",
  },
  {
    image: getimage("airforce.png"),
    title:
      "Launch/Inauguration of NUST R&D Portal, named as DIRECT (Development, Innovation and Research for Cutting Edge Technologies)",
    description: `A
A self-initiative for development of an interactive national-level R&D Portal
Will serve as a platform to link entire for industry-academia collaboration and
innovation.
Enable partners / users to streamline nation-wide call for proposals, online evaluations process
Establishment of comprehensive database of researchers and industry`,
    link: "/scheme/Development of Brake Para",
    type: "scheme",
  },
  {
    image: getimage("marine.png"),
    title: "Call for Proposals - Defence Technologies",
    description: `Proposals are invited on mentioned projects on prescribed template
Sponsored by defence organizations.
Online submission of proposal at given link..`,
    type: "project",
    link: "/project/Pakistan’s indigenous submarine project reaches ‘mega milestone’",
  },
];

export const dataFiles = [
  {
    image: "/assets/icons/pdf.svg",
    title: "Development of Brake Para",
    url: "/pdf/dummy.pdf",
    type: "pdf",
  },
  {
    image: "/assets/icons/pdf.svg",
    title: "Pakistan’s indigenous submarine project",
    url: "/pdf/dummy.pdf",
    type: "pdf",
  },
];
