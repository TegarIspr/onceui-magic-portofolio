const baseURL = 'demo.magic-portfolio.com';

// Enable localization
const i18n = true;

// Manage localized content in the messages folder
const i18nOptions: {
    locales: string[];
    defaultLocale: string;
} = {
    locales: ['id', 'en', 'zh'],
    defaultLocale: 'id'
}

const routes: Record<string, boolean> = {
    '/': true,
    '/about': true,
    '/work': true,
    '/blog': true,
    '/gallery': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes: Record<string, boolean> = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects: {
    mask: 'none' | 'cursor' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    gradient: {
        display: boolean;
        opacity: number;
    };
    dots: {
        display: boolean;
        opacity: number;
        size: string;
    };
    lines: {
        display: boolean;
    };
} = {
    mask: 'cursor',
    gradient: {
        display: true,
        opacity: 0.4
    },
    dots: {
        display: true,
        opacity: 0.4,
        size: '24'
    },
    lines: {
        display: false,
    },
}

const style: {
    theme: 'dark' | 'light';
    neutral: 'sand' | 'gray' | 'slate';
    brand: 'blue' | 'indigo' | 'violet' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'moss' | 'green' | 'emerald' | 'aqua' | 'cyan';
    accent: 'blue' | 'indigo' | 'violet' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'moss' | 'green' | 'emerald' | 'aqua' | 'cyan';
    solid: 'color' | 'contrast';
    solidStyle: 'flat' | 'plastic';
    border: 'rounded' | 'playful' | 'conservative';
    surface: 'filled' | 'translucent';
    transition: 'all' | 'micro' | 'macro';
} = {
    theme: 'dark',
    neutral: 'gray',
    brand: 'emerald',
    accent: 'indigo',
    solid: 'contrast',
    solidStyle: 'flat',
    border: 'playful',
    surface: 'translucent',
    transition: 'all'
}

const display: {
    location: boolean;
    time: boolean;
} = {
    location: true,
    time: true
}

const mailchimp: {
    action: string;
    effects: {
        mask: 'none' | 'cursor' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
        gradient: {
            display: boolean;
            opacity: number;
        };
        dots: {
            display: boolean;
        };
        lines: {
            display: boolean;
        };
    };
} = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        mask: 'topRight',
        gradient: {
            display: true,
            opacity: 0.6
        },
        dots: {
            display: false,
        },
        lines: {
            display: false,
        },
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };
