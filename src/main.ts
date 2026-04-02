import { createApp } from 'vue'
import { syncCloseBehavior } from '@/utils/desktop-preferences'
import App from './App.vue'
import router from './router'
import './styles.css'
import 'virtual:uno.css'

async function bootstrap() {
  await syncCloseBehavior()

  const app = createApp(App)
  app
    .use(router)
    .mount('#app')
}

void bootstrap()
