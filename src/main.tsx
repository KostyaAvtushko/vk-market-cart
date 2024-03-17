import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@vkontakte/vkui/dist/vkui.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
)
