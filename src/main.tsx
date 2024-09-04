import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { ScheduleProvider } from './context/ScheduleContext.tsx';

import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScheduleProvider>
      <App />
    </ScheduleProvider>
  </StrictMode>,
);
