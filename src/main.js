import './style.css'

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="h-16 w-16 mb-4" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="h-16 w-16 mb-4" alt="JavaScript logo" />
    </a>
    <h1 class="text-4xl font-bold text-blue-600">Hello Vite + Tailwind!</h1>
    <div class="mt-6">
      <button id="counter" type="button" class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"></button>
    </div>
    <p class="mt-4 text-gray-600">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
