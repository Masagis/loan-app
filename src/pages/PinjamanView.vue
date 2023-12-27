<template>
  <section>
    <section v-if="showData">
      <v-card class="mb-12">
        <v-card-title class="font-weight-bold">List Pinjaman</v-card-title>
        <v-card-text>
          <div class="row d-flex justify-end">
            <div class="col-md-4">
              <v-text-field
                v-model="search"
                label="Cari..."
                single-line
                hide-details
                outlined
                dense
                color="green"
                class="mb-2"
              />
            </div>
          </div>

          <v-data-table
            :headers="headers"
            :items="datas"
            :search="search"
            :loading="loading"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                left
                small
                class="ml-2"
                color="success"
                @click="details(item)"
                >fa-eye</v-icon
              >
            </template>
          </v-data-table>
        </v-card-text>
        <v-divider />
      </v-card>
    </section>
    <section v-if="showDetail">
      <v-card class="mb-12">
        <v-card-title class="font-weight-bold">Detail Pinjaman </v-card-title>
        <v-divider />
        <v-card-actions class="d-flex justify-end">
          <div class="my-4">
            <v-btn
              @click="backCancel()"
              id="btn_Cancel"
              color="primary"
              outlined
              class="mr-2"
              >Kembali</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </section>
    <confirmation-dialog-promise ref="confDialog" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import utils from '@/utils'
import axios from 'axios'
import { Component } from 'vue-property-decorator'
import { ApplicationModule } from '@/store/modules/application'

@Component({
  components: {}
})
export default class Pinjaman extends Vue {
  mounted () {
    ApplicationModule.setPageTitle('Pinjaman')
    ApplicationModule.setBreadcrumbs([
      {
        text: 'Pinjaman',
        disabled: true,
        href: '/loan'
      }
    ])
    this.getListPinjaman()
  }

  utils = utils
  search = ''
  loading = false
  showData = true
  showDetail = false
  datas = []

  async getListPinjaman () {
    try {
      const response = await axios.get(
        'https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json'
      )
      this.datas = response.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  data () {
    return {
      headers: [
        {
          text: 'Nama',
          value: 'borrower.name',
          class: 'success white--text'
        },
        {
          text: 'Email',
          value: 'borrower.email',
          class: 'success white--text'
        },
        {
          text: 'Kredit Score',
          value: 'borrower.creditScore',
          class: 'success white--text'
        },
        {
          text: 'Resiko Rating',
          value: 'riskRating',
          class: 'success white--text'
        },
        {
          text: 'Term',
          value: 'term',
          class: 'success white--text'
        },
        {
          text: 'Aksi',
          value: 'actions',
          sortable: false,
          align: 'center',
          class: 'success white--text'
        }
      ]
    }
  }

  details () {
    this.showData = false
    this.showDetail = true
  }

  backCancel () {
    this.showData = true
    this.showDetail = false
  }
}
</script>
