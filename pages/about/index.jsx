import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-col justify-center flex-1">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            3 years ago, I began as an Associate software engineer. Since then,
            I&#39;ve done remote and hybrid work for Tesbious Technologies on
            digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mb-8 md:flex md:max-w-xl xl:max-w-none xl:max-0" /* mx-auto  */
          >
            <div className="flex flex-1 xl:gap-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60"
                >
                  {/* title */}
                  <div className="mb-2 font-light md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div 
                      key={itemIndex}
                      className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;