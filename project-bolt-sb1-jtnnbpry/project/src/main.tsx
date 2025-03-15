import './index.css'; // ✅ Import Tailwind CSS here
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NhostProvider } from '@nhost/react';
import { nhost } from './lib/nhost';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <App />
    </NhostProvider>
  </React.StrictMode>
);
