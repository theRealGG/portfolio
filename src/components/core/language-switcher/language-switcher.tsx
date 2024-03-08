import { useLocale, useTranslations } from 'next-intl';
import { LanguageButton } from './language-button';

export function LanguageSwitch() {
  const t = useTranslations('language');
  const locale = useLocale() as 'de' | 'en';

  return (
    <LanguageButton locale={locale}>
      <span className="sr-only">{t('switch', { lang: t(locale) })}</span>
      <span className="text-2xl">{locale === 'en' ? '🇺🇸' : '🇩🇪'}</span>
    </LanguageButton>
  );
}
