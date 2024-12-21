import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  laravel,
  satellite,
  CNS,
  CCG,
  TheWildOasis,
  ToDoList,
  threejs,
  youbeeai,
  ReactPizza,
  GenerateImage,
  Blog,
  admin,
  ihab,
  dany,
  ibrahim,
  home
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "React Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Database Management",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "bootstrap",
    icon: bootstrap
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "express",
    icon: express
  },
  {
    name: "laravel",
    icon: laravel
  }
];

const experiences = [
  {
    title: "Satellite Technician Assistant",
    company_name: "Wissam Al Naassan",
    icon: satellite,
    iconBg: "#E6DEDD",
    date: "September 2020 - Dec 2023 ",
    points: [
      "I meticulously surveyed sites, assessed environmental and structural factors, and successfully planned satellite system placements, ensuring optimal performance and customer satisfaction.",
      "I identified efficient cabling routes, minimized disruptions, and installed or repaired aerials and satellite dishes, enhancing system reliability and operational efficiency.",
      "I rigorously tested equipment, resolved faults promptly to reduce downtime, and provided accurate and competitivequotes, securing new system installation projects.",
      "I consistently improved my technical skills and expanded my expertise, contributing to the timely and successful completion of multiple satellite system projects."
    ]
  },

  {
    title: "Network Engineer Internship(internship)",
    company_name: "CNS Solid Group",
    icon: CNS,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jun 2023",
    points: [
      "I successfully implemented VLANs, VTP, and port security, improving network segmentation and security while optimizing overall system performance.",
      "I deployed EtherChannel to enhance bandwidth and redundancy, and configured SSH, AAA, and password encryption, ensuring secure and reliable network access.",
      "I managed VLANs, trunks, static routing, and OSPF, implemented Access Control Lists, applied NAT, and utilized IPv6concepts to achieve efficient and seamless network operations.",
      "I implemented advanced security measures like port security and DHCP snooping, deployed zone-based firewalls, and configured ASA for NAT and ACLs, significantly strengthening network defenses."
    ]
  },

  {
    title: "Consolidated Consultancy Group",
    company_name: "IT Assistant(Internship)",
    icon: CCG,
    iconBg: "#383E56",
    date: "Sep 2019 - Dec 2019",
    points: [
      "I played a key role in installing and maintaining the IT framework, ensuring smooth operations and minimizing systemdowntime.",
      "I provided IT support, installed peripherals like printers, and maintained the IT infrastructure to improve workflow efficiency.",
      "I resolved network, system, and application queries via the help desk, enhancing user satisfaction and response times",
      "I managed data entry, proofreading, and database maintenance, ensuring process accuracy and efficiency"
    ]
  }
];

const Educations = [
  {
    title: "Web Development Training",
    company_name: "Self-Learning (Home Training)",
    icon: home,
    iconBg: "#383E56",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Built dynamic web applications using HTML, CSS, and JavaScript.",
      "Learned backend development with Node.js, Express, and MongoDB",
      "Gained experience with REST APIs and integrating databases.",
      "Developed React applications using hooks, functional components, and state management.",
      "Built complex UIs with Next.js and optimized rendering for performance.",
      "Implemented global state management using Redux Toolkit.",
      "Mastered MVC architecture and REST API development.",
      "Explored GraphQL for efficient data fetching and querying.",
      "Learned Deno as a modern alternative to Node.js.",
      "Designed and implemented NoSQL databases using MongoDB.",
      "Performed advanced queries, aggregations, and data modeling techniques.",
      "Learned to integrate MongoDB with Node.js for full-stack development."
    ]
  },

  {
    title: "Web Developer Bootcamp(Remote)",
    company_name: "Youbee.ai",
    icon: youbeeai,
    iconBg: "#383E56",
    date: "February 2024 - July 2024",
    points: [
      "I became proficient in HTML, CSS, and JavaScript, creating visually appealing web pages and utilizing Bootstrap for responsive layouts and rapid prototyping.",
      "I gained expertise in PHP and MySQL, implementing CRUD functionalities, user authentication, image uploads, and user role management.",
      "I acquired knowledge of API integration, enhancing functionality and enabling seamless data exchange, and used Angular to build dynamic single-page applications.",
      "I practiced using Laravel to streamline back-end development, improving code efficiency and contributing to robust, scalable applications."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Mr. Abed El ahman is always eager to expand his knowledge and skills.",
    name: "Dr.Ihab Agha",
    designation: "IT Coordinator",
    company: "LIU University",
    image: ihab
  },
  {
    testimonial:
      "Highly skilled in providing efficient solutions and maintaining operations.",
    name: "Ibrahim El Charif",
    designation: "Technical Account Manager",
    company: "CCG",
    image: ibrahim
  },
  {
    testimonial:
      "A highly professional known for delivering exceptional results and exceeding expectations.",
    name: "Dany Habchy",
    designation: "Technical Team Leader ",
    company: "CNS",
    image: dany
  }
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis: A booking platform for cozy nature cabins, offering an easy way to reserve stays and relax amidst serene natural surroundings.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient"
      },
      {
        name: "Supababse",
        color: "green-text-gradient"
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: TheWildOasis,
    source_code_link:
      "https://github.com/AbedAlNaassan/The-Wild-Oasis-Website.git"
  },

  {
    name: "Admin Hotel System",
    description:
      "The Wild Oasis Hotel Admin Panel: A powerful platform to manage bookings, cabin availability, and guest information with an intuitive interface.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient"
      },
      {
        name: "Supabase",
        color: "green-text-gradient"
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient"
      }
    ],
    image: admin,
    source_code_link: "https://github.com/AbedAlNaassan/TheWildOasis_Admin.git"
  },

  {
    name: "Image Generator",
    description:
      "integrates with OpenAI's DALL·E, enabling users to generate or explore AI-created images in a streamlined, user-friendly interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient"
      }
    ],
    image: GenerateImage,
    source_code_link: "https://github.com/AbedAlNaassan/AI-Dall-e.git"
  },

  {
    name: "React Pizza",
    description:
      "The Fast Pizza website is a menu platform showcasing a selection of pizza items for easy browsing. Users can view details of each pizza item, making it simple to explore.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient"
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: ReactPizza,
    source_code_link: "https://github.com/AbedAlNaassan/Abed-Fast-Pizza.git"
  },

  {
    name: "ToDo-List",
    description:
      "A Todo List application that helps users create, manage, and organize tasks efficiently, it offers an intuitive interface for adding, editing, and deleting tasks.. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "CSS",
        color: "pink-text-gradient"
      }
    ],
    image: ToDoList,
    source_code_link: "https://github.com/AbedAlNaassan/ToDo_List.git"
  },

  {
    name: "Blog-Website",
    description:
      "A Laravel-based blog platform for easily creating, managing, and publishing posts with an intuitive interface and responsive design.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Supabase",
        color: "green-text-gradient"
      },
      {
        name: "CSS",
        color: "pink-text-gradient"
      }
    ],
    image: Blog,
    source_code_link: "https://github.com/AbedAlNaassan/Blog_Website.git"
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  Educations
};
