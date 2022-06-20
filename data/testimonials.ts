export type Testimonial = {
  video: {
    src: string;
    cover: {
      src: string;
    };
    extended: boolean;
  };
  title: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: true,
    },
    title: "Maria's Anxiety",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: false,
    },
    title: "Tap's Fear of Public Speaking",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: false,
    },
    title: "(Anonymous) Erectile Dysfunction",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: false,
    },
    title: "Lucy's Phobia",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: false,
    },
    title: "Ewelina's Fear of Flying",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: false,
    },
    title: "Ansley's Panic Attacks",
  },
  {
    video: {
      src: "https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4",
      cover: {
        src: "/video-capture-9817.png",
      },
      extended: true,
    },
    title: "Amy's Weight Loss",
  },
];
