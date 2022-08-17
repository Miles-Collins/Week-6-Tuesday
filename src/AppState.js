import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  /**@type {import('./models/Photo.js ').Photo} */
  photo: null,
 /**@type {import('./models/Photo.js ').Photo} */
  activePhoto: null,
})
