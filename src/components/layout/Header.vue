<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon
      id="navigator"
      @click.stop="toggleDrawer"
    />
    <v-toolbar-title>
      <div class="ToolbarHeader">
        <span class="ToolbarHeader__title">Dashboard</span>
      </div>
    </v-toolbar-title>
    <v-spacer />
    <v-subheader v-if="!$vuetify.breakpoint.mobile">{{ username }}</v-subheader>
    <base-account />
  </v-app-bar>
</template>

<script lang="ts">
import baseAccount from '@/components/layout/Account.vue'
import router from '@/router'
import { ApplicationModule } from '@/store/modules/application'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    baseAccount
  }
})
export default class Header extends Vue {
  username: string | '' = localStorage.accessEmail

  home () {
    router.push({ name: 'Home' })
  }

  toggleDrawer () {
    ApplicationModule.toggleNavigationDrawer()
  }
}
</script>
<style lang="scss" scoped>
.ToolbarHeader {
  font-weight: 800;
  display: flex;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
}
</style>
