<template>
  <v-card>
    <v-card-title>
      <h2>Home</h2>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { ApplicationModule } from '@/store/modules/application'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  mounted () {
    ApplicationModule.setPageTitle('Home')
    ApplicationModule.setBreadcrumbs([
      {
        text: 'Home',
        disabled: true,
        href: 'home'
      }
    ])
  }
}
</script>
