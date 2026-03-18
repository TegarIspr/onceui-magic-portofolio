import '@/once-ui/styles/index.scss';
import '@/once-ui/tokens/index.scss';

import classNames from 'classnames';
import { Inter, Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { baseURL, effects, renderContent, style } from '@/app/resources';
import { Footer, Header, RouteGuard } from '@/components';
import { routing } from '@/i18n/routing';
import { Background, Flex } from '@/once-ui/components';

const themeScript = `
  (function() {
    const theme = localStorage.getItem('magic-portfolio-theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', systemPreference);
    }
  })();
`;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const t = await getTranslations();
  const { person, home } = renderContent(t);

  return {
    metadataBase: new URL(`https://${baseURL}/${locale}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: 'Portfolio website showcasing my work.',
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Flex
            as="html"
            background="page"
            data-neutral={style.neutral}
            data-brand={style.brand}
            data-accent={style.accent}
            data-solid={style.solid}
            data-solid-style={style.solidStyle}
            data-theme={style.theme}
            data-border={style.border}
            data-surface={style.surface}
            data-transition={style.transition}
            className={classNames(
              primary.variable,
              secondary ? secondary.variable : '',
              tertiary ? tertiary.variable : '',
              code.variable,
            )}
          >
            <Flex
              style={{ minHeight: '100vh' }}
              as="body"
              fillWidth
              margin="0"
              padding="0"
              direction="column"
            >
              <Background
                mask={effects.mask as any}
                gradient={effects.gradient as any}
                dots={effects.dots as any}
                lines={effects.lines as any}
              />
              <Flex fillWidth minHeight="16"></Flex>
              <Header />
              <Flex zIndex={0} fillWidth paddingY="l" paddingX="l" justifyContent="center" flex={1}>
                <Flex justifyContent="center" fillWidth minHeight="0">
                  <RouteGuard>{children}</RouteGuard>
                </Flex>
              </Flex>
              <Footer />
            </Flex>
          </Flex>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
