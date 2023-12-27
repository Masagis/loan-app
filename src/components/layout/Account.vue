<template>
  <v-menu
    :close-on-content-click="true"
    :nudge-width="200"
    max-width="320"
    offset-x
    offset-y
    v-model="menuState"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>fa-user-circle-o</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list flat>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fa-user-o</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Masagis</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions>
        <v-btn @click.stop="logout" block color="error" id="button-logout">
          <v-icon>fa-power-off</v-icon>
          <span class="ml-2">Keluar</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import router from '@/router'
import { UserModule } from '@/store/modules/user'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Account extends Vue {
  menuState = false
  userDetail = localStorage.accessEmail

  logout () {
    UserModule.Logout()
    router.push({ name: 'Login' })
  }
}
</script>
