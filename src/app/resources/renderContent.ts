import { person, newsletter, social, home, about, blog, work, gallery } from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';

type TranslationFunction = (key: string, params?: Record<string, string | number>) => string;

interface RenderedContent {
    person: typeof person;
    social: typeof social;
    newsletter: typeof newsletter;
    home: typeof home;
    about: typeof about;
    blog: typeof blog;
    work: typeof work;
    gallery: typeof gallery;
}

const renderContent = (t: TranslationFunction): RenderedContent => {
    if ( i18n ) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            newsletter,
            home,
            about,
            blog,
            work,
            gallery
        }
    }
};

export { renderContent };
