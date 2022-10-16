import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import ChirperTextarea from './components/ChirperTextarea.vue';

const app = createApp();

app
    .component('ChirperTextarea', ChirperTextarea);

app.
    mount('#app');


