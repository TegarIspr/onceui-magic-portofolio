import type { ReactNode } from 'react';
import { SiDocker, SiFigma, SiNextdotjs } from 'react-icons/si';

interface Person {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  languages: string[];
}

interface Newsletter {
  display: boolean;
  title: string;
  description: string;
}

interface Social {
  name: string;
  icon: string;
  link: string;
}

interface Home {
  label: string;
  title: string;
  description: string;
  headline: string;
  subline: string;
}

interface WorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
  images: WorkImage[];
}

interface Institution {
  name: string;
  description: string;
}

interface Skill {
  title: string;
  description: ReactNode;
  images: WorkImage[];
  icon?: any;
}

interface About {
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: string;
  };
  work: {
    display: boolean;
    title: string;
    experiences: WorkExperience[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Institution[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: Skill[];
  };
}

interface Blog {
  label: string;
  title: string;
  description: string;
}

interface Work {
  label: string;
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'vertical' | 'horizontal';
}

interface Gallery {
  label: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

const person: Person = {
  firstName: 'Tegar',
  lastName: 'Is Prayogi',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Mobile Application Developer',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Jakarta',
  languages: ['English', 'Bahasa'],
};

const newsletter: Newsletter = {
  display: false,
  title: `Subscribe to ${person.firstName}'s Newsletter`,
  description: `I occasionally write about mobile development, web technology, and share insights on building enterprise-grade applications.`,
};

const social: Social[] = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/kn9r',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/kn9r',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:tegarispr.id@gmail.com',
  },
];

const home: Home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: `Mobile & Frontend Developer`,
  subline: `I'm ${person.firstName}, a ${person.role} focused on bridging the gap between design and technology. I specialize in crafting high-performance Web and Mobile applications that prioritize seamless user interaction.`,
};

const about: About = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: `${person.firstName} is an experienced ${person.role} focused on bridging the gap between design and technology. Specializing in crafting high-performance Web and Mobile applications that prioritize seamless user interaction. With a Computer Science degree and extensive experience in developing enterprise-grade applications, I bring a strong understanding of system integration and interface design.`,
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'PT Abna Samanhudi Sautika Husada',
        timeframe: 'Feb 2024 - Present',
        role: 'Frontend Developer',
        achievements: [
          `Developed an integrated hospital management system that significantly improved operational efficiency.`,
          `Designed and implemented new modules to meet specific needs within the hospital environment.`,
          `Developed a mobile application for patients and staff, enhancing service accessibility.`,
          `Created a mobile attendance application to improve tracking accuracy for hospital employees.`,
        ],
        images: [],
      },
      {
        company: 'Rumah Sakit Wava Husada',
        timeframe: 'Nov 2021 - Feb 2024',
        role: 'Frontend Developer',
        achievements: [
          `Contributed to comprehensive software systems aimed at optimizing hospital operations.`,
          `Designed applications accessible via web browsers and mobile devices, enhancing user experience.`,
          `Worked closely with stakeholders to gather requirements and deliver tailored solutions.`,
          `Enhanced skills in frontend development, user interface design, and cross-platform application development.`,
        ],
        images: [],
      },
      {
        company: 'PT Gupu Farmtech Indonesia',
        timeframe: 'Feb 2021 - Jan 2022',
        role: 'Mobile Application Developer',
        achievements: [
          `Created a Flutter-based mobile application that revolutionized livestock management through RFID IoT integration.`,
          `Designed user-friendly interfaces to facilitate easy access to livestock data.`,
          `Implemented Bluetooth connectivity for real-time data synchronization.`,
          `Worked closely with a startup team to innovate solutions in agricultural technology.`,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Universitas Yudharta Pasuruan',
        description: `Bachelor of Computer Science (2016 - 2020)`,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Skills & Certifications',
    skills: [
      {
        title: 'Mobile Development',
        description: 'Flutter-based mobile development with RFID IoT and Bluetooth integration.',
        icon: <SiFigma size={32} />,
        images: [],
      },
      {
        title: 'Frontend Development',
        description:
          'Building responsive web applications with React, Next.js, and modern UI frameworks.',
        icon: <SiNextdotjs size={32} />,
        images: [],
      },
      {
        title: 'Docker',
        description: 'Containerization and deployment for scalable applications.',
        icon: <SiDocker size={32} />,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
