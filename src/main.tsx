import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

import InvoiceApp from './components/InvoiceApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InvoiceApp />
  </StrictMode>,
)
