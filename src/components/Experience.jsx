import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="2-columns">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              contentStyle={{
                background: "rgba(29, 24, 54, 0.4)",
                color: "#fff",
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`,
                backdropFilter: "blur(8px)",
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                borderRadius: "20px",
                padding: "2em",
              }}
              contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.1)" }}
              date={experience.date}
              iconStyle={{ 
                background: experience.iconBg,
                boxShadow: `0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 15px ${experience.iconBg}40`
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              visible={true}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <div className="relative z-10">
                <h3 className="text-white text-[24px] font-bold tracking-tight">
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold mt-1"
                  style={{ 
                    margin: 0,
                    textShadow: `0 0 10px ${experience.iconBg}40`
                  }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
