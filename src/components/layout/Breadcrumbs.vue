<template>
  <div class="d-flex flex-row align-center align-self-center">
    <v-btn icon to="/">
      <v-icon>fa-home</v-icon>
    </v-btn>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>fa-caret-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ApplicationModule } from '@/store/modules/application'

@Component
export default class Breadcrumbs extends Vue {
  get breadcrumbs () {
    return ApplicationModule.breadcrumbs
  }
}
</script>
