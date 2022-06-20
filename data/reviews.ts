export type Review = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  rating: number;
  review: string;
  createdAt: string;
  service: {
    reviewAt: string;
    logo: string;
  };
};

export const REVIEWS: Review[] = [
  {
    img: {
      src: "/face1.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Google", logo: "/google-icon.png" },
  },
  {
    img: {
      src: "/face2.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Yelp", logo: "/yelp-icon.png" },
  },
  {
    img: {
      src: "/face3.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Google", logo: "/google-icon.png" },
  },
  {
    img: {
      src: "/face4.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Google", logo: "/google-icon.png" },
  },
  {
    img: {
      src: "/face5.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Google", logo: "/google-icon.png" },
  },
  {
    img: {
      src: "/face6.png",
      alt: "customer review",
    },
    name: "Natalie S. Boston, MA",
    rating: 4,
    review:
      "Brian changed my life. I hade panic attacks and anxiety for years and haven&apos;t had once since our sessions. I cannot recommend this therapy any higher.",
    createdAt: "23/04/2021",
    service: { reviewAt: "Google", logo: "/google-icon.png" },
  },
];
