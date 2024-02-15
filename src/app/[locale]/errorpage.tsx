'use client';

import { useTranslations } from 'next-intl';
import ErrorTemplate from '../error-template';

export default function ErrorPage() {
  const t = useTranslations('error');
  return (
    <ErrorTemplate title={t('title')} subtitle={t('subtitle')} description={t('description')} goHome={t('goHome')} />
  );
}
