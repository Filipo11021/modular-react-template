import { createLazyFileRoute } from '@tanstack/react-router';
import { WelcomeView } from '@/modules/welcome/welcome-view';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return <WelcomeView />;
}
