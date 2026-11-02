import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = document.getElementById('root')
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Routes prerendered at build time carry their path in data-prerendered; hydrate those and
// render everything else (login, unknown URLs) from scratch so the markup never mismatches.
const here = window.location.pathname.replace(/\/+$/, '') || '/'
if (root.dataset.prerendered === here) {
  hydrateRoot(root, tree)
} else {
  root.innerHTML = ''
  createRoot(root).render(tree)
}
