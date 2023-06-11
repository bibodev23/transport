<template>
  <Menu_Navigation/>
  <router-view></router-view>
  <Pied_de_page />
</template>

<script>
import Menu_Navigation from './components/Menu_Navigation.vue'
import Pied_de_page from './components/Pied_de_page.vue'

export default {
  name: 'App',
  components: {
    Menu_Navigation,
    Pied_de_page,
  }
}
</script>