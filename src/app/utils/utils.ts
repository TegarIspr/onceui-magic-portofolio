import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || '',
    publishedAt: data.publishedAt,
    summary: data.summary || '',
    image: data.image || '',
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || '',
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath: string[] = ['', '', '', '']) {
  const validPath = customPath.filter((p): p is string => p !== undefined && p !== '');
  if (validPath.length === 0) {
    return [];
  }
  const postsDir = path.join(process.cwd(), ...validPath);
  return getMDXData(postsDir);
}
