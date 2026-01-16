import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactquery,
  zustand,
  bootstrap,
  mui,
  flutter,
  dart,
  firebase,
  shop,
  food,
  doc,
  movie,
} from "../assets";
import admin from "../assets/Screenshot (197).png";
import mawqaf from "../assets/Screenshot (203).png";
import mawqafWebsite from "../assets/Screenshot (221).png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "React Query",
  //   icon: reactquery,
  // },
  // {
  //   name: "Zustand",
  //   icon: zustand,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "MUI CSS",
    icon: mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },

  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front End & Cross Platform Trainee",
    company_name: "Information Technology Institute (ITI)",
    icon: meta,
    iconBg: "#383E56",
    date: "July 2025 - Decemper 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mawqaf Website",
    description:
      "A responsive website for Mawqaf services, providing users with information about parking locations, pricing, and membership options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mawqafWebsite,
    source_code_link: "https://github.com/Bebbo88/ITI-final-project",
  },
  {
    name: "Mawqaf Flutter Mobile",
    description:
      "A cross-platform mobile application built with Flutter for parking management. Allows users to find parking spots, book slots, and pay online.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: mawqaf,
    source_code_link: "https://github.com/",
  },

  {
    name: "Shop Online",
    description: `It’s a fully responsive eCommerce website built with React.js, featuring authentication, cart, wishlist, and online payment. This project improved my skills in React architecture, API handling.
`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Restfull API",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Bebbo88/Ecommerce",
  },
  {
    name: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard for managing users, products, and orders. Features include real-time data visualization, user role management, and detailed reporting.                                                                     ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Bebbo88/Dashboard",
  },

  {
    name: "Foodac",
    description: `Developed a modern and responsive food delivery web app with a clean UI built using React.js and Tailwind CSS. Focused on reusable components, responsive design, and smooth user experience. Integrated routing and dynamic content for interactive navigation.
`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Json Server",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Bebbo88/Foodac-WebApp",
  },
  {
    name: "DocDoc",
    description: `A full appointment-booking web application built using React and Tailwind CSS.
The project allows users to browse doctors, view profiles, check available time slots, and book appointments easily.
It includes dynamic routing, responsive UI, and clean state management across the entire system.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: doc,
    source_code_link: "https://github.com/Bebbo88/Appointment-Web-App",
  },
  {
    name: "Shahidny",
    description: `Developed a mobile application using React Native that displays movie data fetched from a public API. Designed an intuitive and responsive user interface, ensuring smooth navigation and a modern user experience.`,
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link:
      "https://github.com/Bebbo88/Movies-APP-using-React-Native",
  },
];

export { services, technologies, experiences, testimonials, projects };
