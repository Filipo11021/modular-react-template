import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button';
import { useRandomQuoteQuery } from './welcome-data';

export function WelcomeView() {
  const { data, error, isError, isLoading } = useRandomQuoteQuery();
  const { t } = useTranslation();

  return (
    <div className="p-2">
      <h3>{t('welcome')}</h3>
      <Button
        onClick={() => {
          // eslint-disable-next-line no-alert -- ...
          alert('Hello!');
        }}
      >
        click
      </Button>

      <div>
        {data?.content}
        {isLoading ? '...loading' : null}
        {isError ? error?.message : null}
      </div>
    </div>
  );
}
