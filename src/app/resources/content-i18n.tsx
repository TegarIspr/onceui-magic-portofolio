import type { ReactNode } from 'react';
import { SiFlutter, SiFigma, SiNextdotjs } from 'react-icons/si';

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
  description: string;
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

interface I18nContent {
  person: Person;
  social: Social[];
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
  work: Work;
  gallery: Gallery;
}

type TranslationFunction = (key: string, params?: Record<string, string | number>) => string;

const createI18nContent = (t: TranslationFunction): I18nContent => {
  const person: Person = {
    firstName: 'Tegar',
    lastName: 'Is Prayogi',
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t('person.role'),
    avatar: '/images/avatar.jpg',
    location: 'Asia/Jakarta',
    languages: ['English', 'Bahasa'],
  };

  const newsletter: Newsletter = {
    display: true,
    title: t('newsletter.title', { firstName: person.firstName }),
    description: t('newsletter.description'),
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
    label: t('home.label'),
    title: t('home.title', { name: person.name }),
    description: t('home.description', { role: person.role }),
    headline: t('home.headline'),
    subline: t('home.subline'),
  };

  const about: About = {
    label: t('about.label'),
    title: t('about.title'),
    description: t('about.description', {
      name: person.name,
      role: person.role,
      location: person.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
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
      title: t('about.intro.title'),
      description: t('about.intro.description'),
    },
    work: {
      display: true,
      title: t('about.work.title'),
      experiences: [
        {
          company: 'PT Abna Samanhudisautika Husada ',
          timeframe: t('about.work.experiences.assh.timeframe'),
          role: t('about.work.experiences.assh.role'),
          achievements: t('about.work.experiences.assh.achievements').split(';'),
          images: [
            {
              src: '/images/projects/Mersi.png',
              alt: 'Once UI Project',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: 'PT Gupu Farmtech Indonesia',
          timeframe: t('about.work.experiences.gupu.timeframe'),
          role: t('about.work.experiences.gupu.role'),
          achievements: t('about.work.experiences.gupu.achievements').split(';'),
          images: [],
        },
        {
          company: 'FLY',
          timeframe: t('about.work.experiences.FLY.timeframe'),
          role: t('about.work.experiences.FLY.role'),
          achievements: t('about.work.experiences.FLY.achievements').split(';'),
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
          timeframe: t('about.work.experiences.Creativ3.timeframe'),
          role: t('about.work.experiences.Creativ3.role'),
          achievements: t('about.work.experiences.Creativ3.achievements').split(';'),
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: t('about.studies.title'),
      institutions: [
        {
          name: 'Universitas Yudharta Pasuruan',
          description: t(`about.studies.institutions.Universitas Yudharta.description`),
        },
      ],
    },
    technical: {
      display: true,
      title: t('about.technical.title'),
      skills: [
        {
          title: 'Flutter',
          description: t('about.technical.skills.Figma.description'),
          icon: <SiFlutter size={32} />,
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
          title: 'Figma',
          description: t('about.technical.skills.Figma.description'),
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
          title: 'Next.js',
          description: t('about.technical.skills.Nextjs.description'),
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
    label: t('blog.label'),
    title: t('blog.title'),
    description: t('blog.description', { name: person.name }),
  };

  const work: Work = {
    label: t('work.label'),
    title: t('work.title'),
    description: t('work.description', { name: person.name }),
  };

  const gallery: Gallery = {
    label: t('gallery.label'),
    title: t('gallery.title'),
    description: t('gallery.description', { name: person.name }),
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
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
