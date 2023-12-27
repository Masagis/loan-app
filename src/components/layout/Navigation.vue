<template>
  <v-navigation-drawer app v-model="navigationDrawerState">
    <template v-slot:prepend>
      <v-list-item two-line>
        <h1>Masagis</h1>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list dense nav>
      <div :key="menu.menuId" v-for="menu in menuList">
        <v-list-item :to="menu.menuRoute" v-if="!menu.subMenu || !(menu.subMenu.length > 0)">
          <v-list-item-icon>
            <v-icon>{{ menu.menuIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{menu.menuTitle}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-else>
          <v-list-group :key="menu.menuId" no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>{{ menu.menuIcon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.menuTitle }}</v-list-item-title>
            </template>
            <section :key="subMenu.menuId" v-for="subMenu in menu.subMenu">
              <v-list-item
                :to="subMenu.menuRoute"
                link
                v-if="!subMenu.subMenu || !(subMenu.subMenu.length > 0)"
              >
                <v-list-item-title>{{ subMenu.menuTitle }}</v-list-item-title>
              </v-list-item>
              <v-list-group no-action sub-group v-else>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ subMenu.menuTitle }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <section :key="subSubMenu.menuId" v-for="subSubMenu in subMenu.subMenu">
                  <v-list-item
                    :to="subSubMenu.menuRoute"
                    link
                    v-if="!subSubMenu.subMenu || !(subSubMenu.subMenu.length > 0)"
                  >
                    <v-list-item-title>{{ subSubMenu.menuTitle }}</v-list-item-title>
                  </v-list-item>
                </section>
              </v-list-group>
            </section>
          </v-list-group>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import router from '@/router'
import { ApplicationModule } from '@/store/modules/application'
import { UserModule } from '@/store/modules/user'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
  beforeMount () {
    if (this.$vuetify.breakpoint.mobile) {
      ApplicationModule.setNavigationDrawer(false)
    }
  }

  get navigationDrawerState () {
    return ApplicationModule.navigationDrawerState
  }

  set navigationDrawerState (navigationDrawerState: boolean) {
    ApplicationModule.setNavigationDrawer(navigationDrawerState)
  }

  get menuList () {
    return UserModule.menuList
  }

  logout () {
    UserModule.Logout()
    router.push({ name: 'Login' })
  }
}
</script>
