import { useLocale } from 'next-intl';
import { LanguageButton } from './language-button';

export function LanguageSwitch() {
  const locale = useLocale();

  return (
    <LanguageButton locale={locale}>
      <span className="text-2xl">{locale === 'en' ? '🇺🇸' : '🇩🇪'}</span>
    </LanguageButton>
  );
}
