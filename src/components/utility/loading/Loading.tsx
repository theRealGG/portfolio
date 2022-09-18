import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation('common');
  return (
    <div className='absolute w-[20%] h-[20%] top-[40%] left-[40%] flex justify-center items-center flex-col'>
      <div className='flex-flex-col animate-pulse'>
        <div className='text-xl primary-color'>Hisham</div>
        <div className='text-xl'>Görner</div>
      </div>
      <div>{t('loading')}</div>
    </div>
  );
};

export default Loading;
