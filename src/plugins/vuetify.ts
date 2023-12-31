import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import en from '../locale/en'
import id from '../locale/id'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    iconfont: 'fa4'
  },
  lang: {
    locales: { en, id },
    current: 'id'
  }
})
