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
  role: 'Design Engineer',
  avatar: '/images/avatar.jpg',
  location: 'Asia/Jakarta',
  languages: ['English', 'Bahasa'],
};

const newsletter: Newsletter = {
  display: true,
  title: `Subscribe to ${person.firstName}'s Newsletter`,
  description: `I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.`,
};

const social: Social[] = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/once-ui-system/nextjs-starter',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/company/once-ui/',
  },
  {
    name: 'X',
    icon: 'x',
    link: '',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:example@gmail.com',
  },
];

const home: Home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: `Design engineer and builder`,
  subline: `I'm ${person.firstName}, a design engineer at FLY, where I craft intuitive user experiences. After hours, I build my own projects.`,
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
    description: `${person.firstName} is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.`,
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          `Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.`,
          `Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.`,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          `Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.`,
          `Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.`,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Studies',
    institutions: [
      {
        name: 'Universitas Yudharta Pasuruan',
        description: `Studied Informatics.`,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: 'Able to prototype in Figma with Once UI with unnatural speed.',
        icon: <SiFigma size={32} />,
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Docker',
        description: 'Containerization and deployment with Docker.',
        icon: <SiDocker size={32} />,
        images: [],
      },
      {
        title: 'Next.js',
        description: 'Building next gen apps with Next.js + Once UI + Supabase.',
        icon: <SiNextdotjs size={32} />,
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
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
