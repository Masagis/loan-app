<template>
  <v-card>
    <v-card-title>
      <h3>Data Jumlah Pinjaman Berdasarkan Tujuan Pinjaman</h3>
    </v-card-title>
    <v-card-text>
      <apexcharts
        width="100%"
        height="350"
        type="bar"
        :options="chartData.chartOptions"
        :series="chartData.series"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
import { Component } from 'vue-property-decorator'

import { ApplicationModule } from '@/store/modules/application'

interface DataObject {
  purpose: string;
  amount: number;
}
@Component({
  name: 'chart',
  components: { apexcharts: VueApexCharts }
})
export default class Home extends Vue {
  mounted () {
    ApplicationModule.setPageTitle('Home')
    ApplicationModule.setBreadcrumbs([
      {
        text: 'Home',
        disabled: true,
        href: '/home'
      }
    ])
    this.getListPinjaman()
  }

  aggregatedData: DataObject[] = []

  async getListPinjaman () {
    try {
      const response = await axios.get(
        'https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json'
      )

      response?.data?.forEach(
        (element: { purpose: string; amount: number }) => {
          const existingItem = this.aggregatedData.find(
            (aggregatedItem) => aggregatedItem.purpose === element.purpose
          )

          if (existingItem) {
            // If the purpose already exists, update the amount
            existingItem.amount += element.amount
          } else {
            // If the purpose doesn't exist, add a new entry
            this.aggregatedData.push({
              purpose: element.purpose,
              amount: element.amount
            })
          }
        }
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  get chartData () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          categories: this.aggregatedData?.map((bn: any) => bn?.purpose) ?? []
        }
      },
      series: [
        {
          name: 'series-1',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data: this.aggregatedData?.map((bn: any) => bn?.amount) ?? []
        }
      ]
    }
  }
}
</script>
