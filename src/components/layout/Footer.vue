<template>
  <v-footer app>
    <v-spacer />
    Copyright &copy; {{ new Date().getFullYear() }}. All Rights Reserved
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>
