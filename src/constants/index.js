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
  Blog,
  admin,
  ihab,
  dany,
  ibrahim,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
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
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
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
      "I practiced using Laravel to streamline back-end development, improving code efficiency and contributing to robust, scalable applications.",
    ],
  },
  {
    title: "Network Engineer Internship(internship)",
    company_name: "CNS Solid Group",
    icon: CNS,
    iconBg: "#E6DEDD",
    date: "April 2023 - June 2023",
    points: [
      "particularly in switching, routing, and security, successfully implementing VLANs, VTP, and port security to enhance network segmentation and safety.",
      "I deployed EtherChannel to increase bandwidth and redundancy, and configured SSH, AAA, and password encryption for secure network access.",
      "I managed VLANs, trunks, static routing, and OSPF, implemented Access Control Lists, and applied NAT, understanding of IPv6 concepts for efficient network operation.",
      "I implemented key security measures such as port security and DHCP snooping, deployed zone-based firewalls, configured ASA for NAT and ACLs.",
    ],
  },

  {
    title: "Satellite Technician Assistant",
    company_name: "Wissam Al Naassan",
    icon: satellite,
    iconBg: "#E6DEDD",
    date: "September 2019 - Present",
    points: [
      "I played a crucial role in installing, configuring, and maintaining the company’s IT framework, ensuring smooth and efficient system operations.",
      "I provided general IT support, installed and maintained peripherals like printers and copiers, and supported the seamless functioning of our IT infrastructure.",
      "I handled customer and colleague queries regarding networks, systems, and applications through a help desk, demonstrating strong communication and technical skills.",
      "I managed ongoing tasks such as checking and proofreading content, performing data entry, maintaining databases, and efficiently using office equipment.",
    ],
  },
  {
    title: "Consolidated Consultancy Group",
    company_name: "IT Assistant(Internship)",
    icon: CCG,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I played a crucial role in installing, configuring, and maintaining the company’s IT framework, ensuring smooth and efficient system operations.",
      "I provided general IT support, installed and maintained peripherals like printers and copiers, and supported the seamless functioning of our IT infrastructure.",
      "I handled customer and colleague queries regarding networks, systems, and applications through a help desk, demonstrating strong communication and technical skills.",
      "I managed ongoing tasks such as checking and proofreading content, performing data entry, maintaining databases, and efficiently using office equipment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mr. Abed El ahman is always eager to expand his knowledge and skills.",
    name: "Dr.Ihab Agha",
    designation: "IT Coordinator",
    company: "LIU University",
    image: ihab,
  },
  {
    testimonial:
      "Highly skilled in providing efficient solutions and maintaining operations.",
    name: "Ibrahim El Charif",
    designation: "CCG",
    company: "CCG",
    image: ibrahim,
  },
  {
    testimonial:
      "A highly professional known for delivering exceptional results and exceeding expectations.",
    name: "Dany Habchy",
    designation: "CNS",
    company: "Technical Team Leader",
    image: dany,
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis: A booking platform for cozy nature cabins, offering an easy way to reserve stays and relax amidst serene natural surroundings.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supababse",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TheWildOasis,
    source_code_link:
      "https://github.com/AbedAlNaassan/The-Wild-Oasis-Website.git",
  },
  {
    name: "ToDo-List",
    description:
      "A Todo List application that helps users create, manage, and organize tasks efficiently, it offers an intuitive interface for adding, editing, and deleting tasks.. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ToDoList,
    source_code_link: "https://github.com/AbedAlNaassan/ToDo_List.git",
  },
  {
    name: "React Pizza",
    description:
      "The Fast Pizza website is a menu platform showcasing a selection of pizza items for easy browsing. Users can view details of each pizza item, making it simple to explore.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ReactPizza,
    source_code_link: "https://github.com/AbedAlNaassan/Abed-Fast-Pizza.git",
  },

  {
    name: "Blog-Website",
    description:
      "A Laravel-based blog platform for easily creating, managing, and publishing posts with an intuitive interface and responsive design.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/AbedAlNaassan/Blog_Website.git",
  },

  {
    name: "Admin Hotel System",
    description:
      "The Wild Oasis Hotel Admin Panel: A powerful platform to manage bookings, cabin availability, and guest information with an intuitive interface.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/AbedAlNaassan/TheWildOasis_Admin.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
