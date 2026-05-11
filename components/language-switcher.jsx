'use client';

import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { Dropdown, DropdownItem } from 'flowbite-react';
import Image from 'next/image';

import es from '@/public/flags/ES.svg';
import pt from '@/public/flags/PT.svg';
import en from '@/public/flags/US.svg';
import fr from '@/public/flags/FR.svg';
import ar from '@/public/flags/AR.png';

// Google Translate cookie name
export const COOKIE_NAME = 'googtrans';

const flagMap = {
  en,
  es,
  fr,
  pt,
  ar,
};

const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [languageConfig, setLanguageConfig] = useState(null);
  const [image, setImage] = useState(en);

  useEffect(() => {
    setMounted(true);

    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;

    // Read language from cookie
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');

      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    // Fallback to default language
    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = globalThis.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }

    // Set current language
    if (languageValue) {
      setCurrentLanguage(languageValue);
      setImage(flagMap[languageValue] || en);
    }

    // Set translation config
    if (globalThis.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(globalThis.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Prevent hydration mismatch
  if (!mounted || !currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang) => {
    setCookie(null, COOKIE_NAME, `/auto/${lang}`, {
      path: '/',
    });

    window.location.reload();
  };

  return (
    <div className="notranslate text-center">
      <Dropdown
        inline
        className="mx-2 border-none"
        label={
          <div className="flex items-center gap-2">
            <Image
              src={image}
              alt="Current language"
              width={20}
              height={20}
              className="rounded-sm"
            />

            <span className="text-sm uppercase">{currentLanguage}</span>
          </div>
        }
      >
        {languageConfig.languages.map((ld) => (
          <DropdownItem key={ld.name} onClick={() => switchLanguage(ld.name)}>
            <div
              className={`flex items-center gap-2 text-sm capitalize transition-all ${
                currentLanguage === ld.name
                  ? 'text-primary-blue font-semibold'
                  : ''
              }`}
            >
              <Image
                src={flagMap[ld.name] || en}
                alt={ld.title}
                width={18}
                height={18}
                className="rounded-sm"
              />

              <span>{ld.title}</span>
            </div>
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
