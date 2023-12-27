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
        <v-divider />
        <div>
          <v-card-title class="font-weight-bold">Informasi</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-row>
                  <v-col cols="5" sm="5" md="5">
                    <p>Nama</p>
                    <p>Email</p>
                    <p>Kredit Skor</p>
                    <p>Rate Interest</p>
                    <p>Rangking Resiko</p>
                    <p>Term</p>
                    <p>Tujuan Pinjaman</p>
                    <p>Barang Jaminan</p>
                    <p>Nilai Jaminan</p>
                    <p>Tipe Dokumen</p>
                    <p>Dokumen</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="7">
                    <p>
                      <strong>: {{ detailsData?.borrower?.name || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.borrower?.email || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.borrower?.creditScore || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.interestRate || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.riskRating || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.term || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.purpose || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.collateral?.type || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.collateral?.value || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.documents[0]?.type || "-" }}</strong>
                    </p>
                    <p>
                      <strong>: {{ detailsData?.documents[0]?.url || "-" }}</strong>
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </div>

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
  creditInfo = []
  detailsData = ''

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

  details (item) {
    this.detailsData = item
    this.showData = false
    this.showDetail = true
  }

  backCancel () {
    this.showData = true
    this.showDetail = false
  }
}
</script>
