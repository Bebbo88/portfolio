import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../utils/motion";

import itiCert from "../assets/certf/certf2.jpeg";
import pharaonxCert from "../assets/certf/certf1.PNG";

const certificates = [
  {
    id: 1,
    title: "Front End & Cross Platform Development",
    issuer: "Information Technology Institute (ITI)",
    date: "December 2025",
    description:
      "Completed an intensive professional training program covering React.js, Flutter, React Native, and modern web development practices.",
    color: "from-[#915eff] to-[#5d3fd3]",
    icon: "🎓",
    image: itiCert,
  },
  {
    id: 2,
    title: "Front End Developer",
    issuer: "PharaonX",
    date: "March 2026",
    description:
      "Professional experience certificate from PharaonX, demonstrating skills in React.js, UI/UX implementation, and collaborative team development.",
    color: "from-[#00cea8] to-[#0094a8]",
    icon: "💼",
    image: pharaonxCert,
  },
];

const CertificateCard = ({ cert, index, onOpen }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.7)}
    className="group cursor-pointer"
    onClick={() => onOpen(cert)}
  >
    <div
      className="relative bg-tertiary rounded-2xl overflow-hidden
                  border border-[#ffffff10] hover:border-[#915eff50]
                  transition-all duration-300 hover:shadow-[0_0_40px_rgba(145,94,255,0.2)]
                  hover:-translate-y-2"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color}
                          flex items-center justify-center text-2xl flex-shrink-0
                          group-hover:scale-110 transition-transform duration-300`}
          >
            {cert.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-[18px] leading-tight">
              {cert.title}
            </h3>
            <p className={`text-[13px] font-semibold mt-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
              {cert.issuer}
            </p>
          </div>
        </div>

        <p className="text-secondary text-[14px] leading-relaxed mb-5">
          {cert.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[12px] text-secondary border border-[#ffffff15] rounded-full px-3 py-1">
            📅 {cert.date}
          </span>
          <span className="text-[12px] text-[#915eff] flex items-center gap-1 group-hover:gap-2 transition-all">
            View
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

// Lightbox Modal
const CertModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative bg-tertiary rounded-3xl overflow-hidden max-w-2xl w-full
                     border border-[#915eff40] shadow-[0_0_60px_rgba(145,94,255,0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`h-2 w-full bg-gradient-to-r ${cert.color}`} />

          <div className="p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffffff10]
                         hover:bg-[#ffffff20] flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate image or placeholder */}
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full rounded-xl mb-6 object-contain max-h-80"
              />
            ) : (
              <div
                className={`w-full h-52 rounded-xl mb-6 bg-gradient-to-br ${cert.color}
                              flex items-center justify-center opacity-20`}
              >
                <span className="text-8xl">{cert.icon}</span>
              </div>
            )}

            <h2 className="text-white text-[24px] font-bold mb-1">{cert.title}</h2>
            <p className={`text-[15px] font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
              {cert.issuer}
            </p>
            <p className="text-secondary text-[14px] leading-relaxed mb-4">{cert.description}</p>
            <p className="text-[13px] text-secondary">📅 Issued: {cert.date}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Credentials and certificates that reflect my learning journey, professional
        training, and hands-on experience in the tech industry.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            index={index}
            onOpen={setSelected}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}

      {/* Note for adding more certificates */}
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-8 text-center text-secondary/50 text-[12px]"
      >
        More certificates coming soon...
      </motion.p>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
