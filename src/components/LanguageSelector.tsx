'use client';

import type React from 'react';
import { useState, useTransition } from 'react';
import { type Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import { DropdownWrapper, Flex, Text } from '@/once-ui/components';
import styles from './LanguageSelector.module.scss';

const localeConfig: Record<string, { flag: string; name: string }> = {
  en: { flag: '🇺🇸', name: 'English' },
  id: { flag: '🇮🇩', name: 'Indonesia' },
  zh: { flag: '🇨🇳', name: '中文' },
};

interface LanguageSelectorProps {
  currentLocale: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLocale }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname() ?? '';
  const [isOpen, setIsOpen] = useState(false);

  const languageOptions = routing.locales.map((locale) => ({
    value: locale,
    label: localeConfig[locale]?.name || locale.toUpperCase(),
    hasPrefix: localeConfig[locale]?.flag || '🌐',
  }));

  const selectedOption = languageOptions.find((opt) => opt.value === currentLocale);

  const handleSelect = (locale: string) => {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
    setIsOpen(false);
  };

  return (
    <DropdownWrapper
      className={`${styles.selector} ${isPending ? styles.disabled : ''}`}
      dropdownOptions={languageOptions.map((opt) => ({
        ...opt,
        onClick: () => handleSelect(opt.value),
      }))}
      dropdownProps={{
        onOptionSelect: (option) => handleSelect(option.value),
      }}
      selectedOption={currentLocale}
      style={{ width: 'auto' }}
    >
      <Flex className={styles.trigger} alignItems="center" style={{ cursor: 'pointer' }}>
        <Text variant="label-default-m" className={styles.triggerText}>
          {selectedOption?.hasPrefix || '🌐'}
        </Text>
        <Text variant="label-default-m" className={styles.triggerText}>
          {selectedOption?.label || currentLocale.toUpperCase()}
        </Text>
        <Text variant="body-default-s" className={styles.chevron}>
          ▾
        </Text>
      </Flex>
    </DropdownWrapper>
  );
};
