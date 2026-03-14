# AGENTS.md — Magic Portfolio Developer Guide

## Overview

Magic Portfolio is a Next.js 16 portfolio template built on Once UI. It supports MDX content, internationalization (i18n), and static export. This guide helps agentic coding agents work effectively in this codebase.

---

## Commands

### Development & Build

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server (http://localhost:3000) |
| `pnpm run build` | Production build |
| `pnpm run export` | Static export (for hosting on static platforms) |
| `pnpm run start` | Run production server |
| `pnpm run lint` | Run ESLint (Next.js core-web-vitals config) |

### Running a Single Test

**No test framework is configured.** This project does not have any test files. If you add tests, use:

```bash
# Jest (if added)
npm test -- --testPathPattern="filename"

# Vitest (if added)
npx vitest run filename
```

---

## Code Style Guidelines

### 1. File Naming

- **Components**: PascalCase (`Button.tsx`, `Header.tsx`)
- **Modules/Styles**: kebab-case (`header.module.scss`)
- **Utilities**: camelCase (`utils.ts`, `helpers.ts`)
- **Pages/Routes**: kebab-case for slugs (`[slug]/page.tsx`)

### 2. Import Order

```typescript
// 1. React core
import React from 'react';

// 2. Next.js / Next.js plugins
import { useParams } from 'next/navigation';
import Link from 'next/link';

// 3. External libraries
import classnames from 'classnames';

// 4. Once UI components
import { Flex, Button, Heading } from '@/once-ui/components';

// 5. App components
import { Projects } from '@/components/work/Projects';
import { Mailchimp, Posts } from '@/components';

// 6. Config / resources
import { baseURL, routes, renderContent } from '@/app/resources';

// 7. i18n
import { getTranslations } from 'next-intl/server';

// 8. Styles (last)
import styles from './Component.module.scss';
```

### 3. Path Aliases

Use `@/` for imports from `src/`:

```typescript
// Good
import { Button } from '@/once-ui/components';
import styles from '@/components/Header.module.scss';

// Avoid
import { Button } from '../../../once-ui/components';
```

### 4. Component Structure

Use `"use client"` for client-side interactivity:

```typescript
"use client";

import React, { ReactNode, forwardRef } from 'react';
import { Flex } from '@/once-ui/components';
import styles from './Component.module.scss';

interface ComponentProps {
    variant?: 'primary' | 'secondary';
    size?: 's' | 'm' | 'l';
    children?: ReactNode;
    className?: string;
}

export type ComponentPropsType = ComponentProps & React.HTMLAttributes<HTMLDivElement>;

const Component = forwardRef<HTMLDivElement, ComponentPropsType>(({
    variant = 'primary',
    size = 'm',
    children,
    className,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={`${styles.component} ${styles[variant]} ${styles[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
});

Component.displayName = 'Component';

export { Component };
```

### 5. Props & Types

- Define props with `interface` or `type`
- Export union types for component variants
- Use `React.FC` for functional components when needed

```typescript
interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    size?: 's' | 'm' | 'l';
    loading?: boolean;
}

export type ButtonVariant = ButtonProps['variant'];
```

### 6. Styling (SCSS Modules)

- Use CSS Modules: `Component.module.scss`
- Use Once UI design tokens (CSS custom properties):

```scss
.button {
    background: var(--brand-solid-medium);
    color: var(--brand-on-solid-strong);
    border-radius: var(--radius-m);
    transition: var(--transition-micro-medium);

    &:hover, &:focus {
        background: var(--brand-solid-strong);
    }

    &.small {
        padding: var(--static-space-4) var(--static-space-8);
    }
}
```

**Common tokens**: `var(--brand-*)`, `var(--neutral-*)`, `var(--static-space-*)`, `var(--radius-*)`, `var(--transition-*)`

### 7. Null Checks

TypeScript has `strictNullChecks: true`. Always handle null/undefined:

```typescript
// Good
const name = person?.name ?? 'Default';
{condition && <Component />}

// Avoid
const name = person.name; // May crash
```

### 8. Error Handling

No global error boundary pattern exists. For error handling:

```typescript
try {
    // operation
} catch (error) {
    console.error('Error message:', error);
    // Handle gracefully
}
```

### 9. Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Button`, `Header` |
| Props | camelCase | `fillWidth`, `prefixIcon` |
| Variables | camelCase | `currentTime`, `isPending` |
| Functions | camelCase | `handleClick`, `renderContent` |
| Constants | PascalCase | `Locale`, `Routes` |
| CSS Classes | kebab-case | `.fill-width`, `.button` |

### 10. Internationalization (i18n)

Use `next-intl` for translations:

```typescript
// Server components
import { getTranslations } from 'next-intl/server';
const t = await getTranslations();
const { title } = renderContent(t);

// Client components
import { useTranslations } from 'next-intl';
const t = useTranslations();
```

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Locale routes (en, de, etc.)
│   │   ├── blog/              # Blog pages
│   │   ├── work/              # Work/project pages
│   │   ├── about/             # About page
│   │   ├── gallery/           # Gallery page
│   │   └── page.tsx           # Home page
│   ├── resources/             # Config (config.ts, content files)
│   └── og/                    # Open Graph image generation
├── components/                # App-specific components
│   ├── work/                  # Project-related
│   ├── blog/                  # Blog-related
│   └── gallery/               # Gallery-related
└── once-ui/                   # Once UI library (components, styles)
```

---

## Content Files

Add content via MDX files:

- Blog posts: `src/app/[locale]/blog/posts/*.mdx`
- Projects: `src/app/[locale]/work/projects/*.mdx`

Content is rendered using `next-mdx-remote` and `remark`.

---

## Adding New Dependencies

Before adding new packages, check existing dependencies in `package.json`. Avoid duplicate functionality.

---

## Key Libraries

- **Next.js 16** — React framework
- **next-intl** — Internationalization
- **next-mdx-remote** — MDX rendering
- **SCSS Modules** — Styling
- **Once UI** — Design system components and tokens
