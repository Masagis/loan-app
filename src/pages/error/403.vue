<template>
    <v-app id="404">
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <section class="text-md-center 404">
            <h1 class="404__title">403</h1>
            <h2 class="my-3 headline 404__headline">Forbidden Access</h2>
            <div class="404__button">
              <v-btn @click.stop="goHome" color="primary">Back to Home</v-btn>
            </div>
          </section>
        </v-layout>
      </v-container>
    </v-app>
  </template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import router from '@/router'

  @Component
export default class Page403 extends Vue {
  goHome () {
    router.push({ name: 'Home' })
  }
}
</script>

  <style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #9d9d9e;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
      rgba(61, 61, 61, 0.3) 3px 3px;
  }
  </style>
