<template>
  <v-app>
    <base-header />
    <base-navigation />
    <v-main>
      <v-container fluid>
        <base-breadcrumbs />
        <router-view />
      </v-container>
    </v-main>
    <base-footer />
    <v-dialog max-width="400" persistent v-model="errorDialogState" width="400">
      <v-card>
        <v-card-title>
          <v-icon color="error" left>fa-exclamation-circle</v-icon>
          <span>Initial Load Failed</span>
        </v-card-title>
        <v-card-text>{{ errorDialogDescription }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click.stop="loadApplicationParameters" color="warning"
            >Retry</v-btn
          >
          <v-btn @click.stop="logout" color="error">Exit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      max-width="400"
      persistent
      v-model="updatePwaDialogState"
      width="400"
    >
      <v-card>
        <v-card-title>
          <v-icon color="success" left>fa-exclamation-circle</v-icon>
          <span>Update Available</span>
        </v-card-title>
        <v-card-text>Click OK to update application.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click.stop="updatePwaCache()" color="info">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import baseHeader from '@/components/layout/Header.vue'
import baseNavigation from '@/components/layout/Navigation.vue'
import baseFooter from '@/components/layout/Footer.vue'
import baseBreadcrumbs from '@/components/layout/Breadcrumbs.vue'

import wb from '@/registerServiceWorker'
import MenuPrivilegeModel from '@/models/MenuPrivilegeModel'

@Component({
  components: {
    baseHeader,
    baseNavigation,
    baseFooter,
    baseBreadcrumbs
  }
})
export default class Main extends Vue {
  errorDialogState = false
  errorDialogDescription = ''
  updatePwaDialogState = false

  wb = wb

  mounted () {
    if (this.wb) {
      this.wb.addEventListener('waiting', () => {
        this.updatePwaDialogState = true
      })
    }
    this.loadApplicationParameters()
  }

  loadApplicationParameters () {
    // TODO load needed parameters from backend

    // TODO load menuList based on user privilege and remove dummy data
    const listPrivilege: MenuPrivilegeModel[] = []
    listPrivilege.push(
      {
        menuId: '0',
        menuTitle: 'Dashboard',
        menuIcon: 'fa-home',
        menuRoute: '/home',
        parentMenuId: '0',
        roleId: 'ADMIN',
        roleName: 'Administrator',
        subMenu: []
      },
      {
        menuId: '1',
        menuTitle: 'Pinjaman',
        menuIcon: 'fa-file-text',
        menuRoute: '/loan',
        parentMenuId: '1',
        roleId: 'ADMIN',
        roleName: 'Administrator',
        subMenu: []
      }
    )
    UserModule.SetMenuList(listPrivilege)
  }

  updatePwaCache () {
    this.updatePwaDialogState = false
    if (this.wb) {
      this.wb.messageSW({ type: 'SKIP_WAITING' })
    }
  }
}
</script>
