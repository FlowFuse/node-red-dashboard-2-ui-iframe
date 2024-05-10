/**
 * Used only for development (via `npm run dev`).
 *
 * This file is useful for testing your component in isolation from Node-RED.
 */
import { createApp } from 'vue'

import UIIframe from './components/UIIframe.vue'

createApp(UIIframe).mount('#app')
