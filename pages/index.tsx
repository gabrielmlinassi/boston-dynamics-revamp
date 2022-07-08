import dynamic from "next/dynamic";
import NextLink from "next/link";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/outline";

import { REVIEWS } from "data/reviews";
import { TESTIMONIALS } from "data/testimonials";
import { SERVICES } from "data/services";

import Rating from "@components/rating";
import RatingBars from "@components/rating-bars";
import Button from "@components/button";
import Drawer from "@components/drawer";
import VideoDialog from "@components/video-dialog";

const Player = dynamic(() => import("@components/player"));

export default function Home() {
  return (
    <MotionConfig transition={{ duration: 0.7 }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex h-[500px] items-center justify-center p-5 md:h-[700px] md:p-0"
      >
        <div className="max-w-[950px]">
          <h1>
            <span className="fancy-underline">Hypnotherapy</span>{" "}
            <span className="text-blue-400">and more</span> for Anxiety & Weight
            Loss
          </h1>
        </div>
      </motion.div>

      <div className="bg-blue-500 py-20 md:py-40">
        <div className="mx-auto max-w-[1000px] p-5 md:p-0">
          <h2>
            <span className="fancy-underline text-white">Help for...</span>
          </h2>
          <div className="my-16 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-y-16 md:gap-x-10">
            <AnimatePresence>
              {SERVICES.map((x, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: (i) => ({
                      opacity: 1,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <NextLink href={x.href}>
                    <a className="group font-NewYork text-[20px] text-white md:text-[26px]">
                      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={x.img.src}
                          alt={x.img.alt}
                          className="h-full w-full object-cover duration-200 group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-2 text-center md:mt-6">{x.title}</div>
                    </a>
                  </NextLink>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="pt-20 md:pt-40">
        <div id="about" className="mx-auto max-w-[1000px] p-5 md:p-0">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-[550px]">
              <h2>
                Hi, I&apos;m{" "}
                <span className="fancy-underline">Brian Mahoney.</span>
              </h2>
            </div>
            <div className="max-w-[800px]">
              <p className="mt-2 text-2xl">
                This is how I use hypnosis (and other approaches) to help my
                clients resolve weight loss and anxiety issues.
              </p>
            </div>
          </motion.div>
          <div className="aspect-w-16 aspect-h-9 my-16 overflow-hidden rounded-lg bg-blue-300">
            <Player
              light
              url="https://res.cloudinary.com/dsvfol2fs/video/upload/v1655228145/Metal_Wind_Chimes_at_Sunset.mp4"
              cover="/video-capture-9817.png"
            />
          </div>
          <div className="flex justify-center">
            <Drawer
              trigger={
                <Button variant="filled" endIcon={<PhoneIcon />}>
                  Let&apos;s talk
                </Button>
              }
            />
          </div>
        </div>
      </div>

      <div className="pt-20 md:pt-40">
        <h3 className="flex items-center justify-center gap-6 py-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/g832.png" alt="" className="hidden md:block" /> Top 10
          Boston Therapists
        </h3>
        <div className="grid grid-cols-2 gap-[1px] border-t border-b border-black border-opacity-20 bg-black bg-opacity-20 md:grid-cols-5">
          {[
            {
              img: {
                src: "/usa_today.png",
                alt: "USA Today",
              },
            },
            {
              img: {
                src: "/BostonMagazine.png",
                alt: "Boston Magazine",
              },
            },
            {
              img: {
                src: "/bostondotcom.png",
                alt: "Bostondotcom",
              },
            },
            {
              img: {
                src: "/Giddy.png",
                alt: "Giddy",
              },
            },
            {
              img: {
                src: "/edr.png",
                alt: "EDR",
              },
            },
            {
              img: {
                src: "/NGH.png",
                alt: "NGH",
              },
            },
            {
              img: {
                src: "/ACH.png",
                alt: "ACH",
              },
              description:
                "Certified Hypnotherapist, National Guild of Hypnotists",
            },
            {
              img: {
                src: "/ABH.png",
                alt: "ABH",
              },
              description:
                "Certified Hypnotherapist, National Guild of Hypnotists",
            },
            {
              img: {
                src: "/HNLP.png",
                alt: "HNLP",
              },
              description:
                "Certified Hypnotherapist, National Guild of Hypnotists",
            },
            {
              img: {
                src: "/coach-certification.png",
                alt: "Coach Certification",
              },
              description:
                "Certified Hypnotherapist, National Guild of Hypnotists",
            },
          ].map((x, i) => (
            <div key={i}>
              <div className="flex h-[160px] flex-col items-center justify-center bg-white px-4 md:px-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={x.img.src} alt={x.img.alt} />
                {x.description && (
                  <div className="mx-auto mt-1 max-w-[250px] text-center md:mt-3">
                    <span className="text-xs">{x.description}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="reviews"
        className="mx-auto mt-20 max-w-[1000px] p-5 md:mt-40 md:p-0"
      >
        <div className="max-w-[600px]">
          <h2 className="text-black-400">
            <span className="fancy-underline">Client Results</span> are at the
            heart of my work
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <div className="flex h-20 flex-col items-start justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/g832.png" alt="Yelp logo" />
              <div className="flex gap-2">
                <Rating rating={5} />
                <span className="font-Inter text-blue-500">
                  5/5 - 21 Reviews
                </span>
              </div>
            </div>
            <div className="mt-4">
              <RatingBars ratings={[1, 0, 0, 0, 20]} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex h-20 flex-col items-start justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/google-logo.png" alt="Google logo" />
              <div className="flex gap-2">
                <Rating rating={4.7} />
                <span className="font-Inter text-blue-500">
                  4.7/5 - 15 Reviews
                </span>
              </div>
            </div>
            <div className="mt-4">
              <RatingBars ratings={[1, 0, 0, 0, 15]} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-40 max-w-[1000px] p-5 md:p-0">
        <div className="max-w-[700px]">
          <h2 className="text-black-400">
            Since 2004, I&apos;ve helped thousands of{" "}
            <span className="fancy-underline">clients succeed</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-6 md:grid-cols-3">
          <AnimatePresence>
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: (i) => ({
                    opacity: 1,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="rounded-3xl bg-gray p-10">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.img.src}
                      alt={review.img.alt}
                      className="rounded-2xl"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{review.name}</span>
                      <Rating rating={review.rating} starSize="sm" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm opacity-70">“{review.review}”</p>
                  <div className="mt-3 flex items-center justify-between">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.service.logo}
                      alt={`customer review posted on ${review.service.reviewAt}`}
                    />
                    <span className="text-sm text-black opacity-70">
                      {review.createdAt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center">
          <Button variant="outlined">Load More</Button>
        </div>
      </div>

      <div className="mx-auto mt-40 max-w-[1000px] p-5 md:p-0">
        {/* TODO: create comp MansonryGrid? 🤔 */}
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {TESTIMONIALS.map((x, i) => (
            <div key={i} className={x.video.extended ? "md:col-span-2" : ""}>
              <div className="h-[350px] overflow-hidden rounded-3xl bg-blue-300">
                <div className="relative hidden h-full w-full md:block">
                  <VideoDialog src={x.video.src} cover={x.video.cover.src} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={x.video.cover.src}
                    alt="cover img"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="block h-full w-full md:hidden">
                  <Player url={x.video.src} cover={x.video.cover.src} light />
                </div>
              </div>
              <h4 className="mt-4">{x.title}</h4>
            </div>
          ))}

          {/*  */}
        </div>
        <div className="mt-6 flex items-center  justify-center">
          <Button variant="outlined">Load More</Button>
        </div>
      </div>

      <div className="mx-auto mt-40 max-w-[1200px] p-5 md:p-0">
        <div className="rounded-xl border border-blue-500 py-10 px-4 md:py-16 md:px-0">
          <div className="mx-auto max-w-[1000px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
              <div className="max-w-[500px]">
                <h2 className="text-black-400">
                  Could I <span className="fancy-underline">help you</span>,
                  too?
                </h2>
                <p className="mt-3 text-lg text-[#565758]">
                  <b className="fancy-underline --thin pb-1">Nine out of ten</b>{" "}
                  Boston Hypnosis clients are successful because I limit my
                  practice. Would you be a good fit?
                </p>
              </div>
              <div>
                <Drawer
                  trigger={
                    <Button variant="filled" startIcon={<PhoneIcon />}>
                      Let&apos;s talk
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
