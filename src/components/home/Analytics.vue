<template>
  <div class="mb-20">
    <h4 class="text-grey font-bold pl-5">Church Analytics</h4>
    <div class="mt-4 flex items-stretch justify-between flex-wrap p-4">
      <div class="w-full">
        <div class="h-full bg-white shadow p-4 m-1 rounded">

          <div class="text-grey-light w-full inline-flex justify-between items-center mb-4">
            <h4 class="text-grey">People Analytics</h4>
            <div class="inline-flex items-center text-grey" id="legend">
              <div class="inline-flex items-center p-2 mr-2" :class="currentChartIndex === 0 ? 'is-active border-b-2 border-blue' : ''">
                <p class="h-2 w-2 bg-blue rounded-full mr-2"></p>
                <p class="text-xs">Current Members</p>
              </div>
              <div class="inline-flex items-center p-2 mr-2" :class="currentChartIndex === 1 ? 'is-active border-b-2 border-yellow' : ''">
                <p class="h-2 w-2 bg-yellow rounded-full mr-2"></p>
                <p class="text-xs">Active Guests</p>
              </div>
              <div class="inline-flex items-center p-2" :class="currentChartIndex === 2 ? 'is-active border-b-2 border-red' : ''">
                <p class="h-2 w-2 bg-red rounded-full mr-2"></p>
                <p class="text-xs">Former Members</p>
              </div>
            </div>
            <router-link :to="{name: 'people'}" class="no-underline text-grey-light text-xs hover:text-grey-dark hover:bg-grey-lighter border rounded-sm p-1 h-5 flex items-center">
              See People
            </router-link>
          </div>

          <div ref="people-chart" id="people-chart" class="ct-chart ct-double-octave"></div>

        </div>
      </div>

      <div class="w-full mt-4">
        <div class="h-full bg-white shadow p-4 m-1 rounded">

          <div class="text-grey-light w-full inline-flex justify-between items-center mb-4">
            <h4 class="text-grey">Events Density</h4>
            <router-link :to="{name: 'events'}" class="no-underline text-grey-light text-xs hover:text-grey-dark hover:bg-grey-lighter border rounded-sm p-1 h-5 flex items-center">
              See Events
            </router-link>
          </div>

          <div ref="events-chart" id="events-chart" class="ct-chart ct-double-octave"></div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    format
  } from 'date-fns'

  import {
    eventIcon,
    groupIcon,
    peopleIcon,
    servicesIcon,
    homeIcon
  } from '@/utils/icons'

  import Chartist from 'chartist'

  const today = new Date()

  let peopleChart = null
  let eventsDensityChart = null

  function getLabelName(label, interval) {
    let formatToken = null

    switch (interval) {
      case 'month':
        formatToken = 'MMM'
        break
      case 'year':
        formatToken = 'yyyy'
        break
      case 'hour':
        formatToken = 'MMM'
        break
      case 'week':
        formatToken = 'MMM'
        break
      case 'day':
        formatToken = 'MMM'
        break
      default:
        formatToken = 'MMM'
        break
    }

    return format(label, formatToken, {
      awareOfUnicodeTokens: true
    })
  }

  export default {
    name: 'Analytics',
    data() {
      return {
        people: [],
        peopleLoaded: false,
        groups: [],
        events: [],
        icons: {
          event: eventIcon,
          group: groupIcon,
          people: peopleIcon,
          service: servicesIcon,
          home: homeIcon
        },
        currentChartIndex: null
      }
    },
    mounted() {
      this.setUpPeopleChart()
      this.readyCallbacks([this.refresh])
    },
    methods: {
      refresh() {
        this.getPeopleStats()
      },
      updateChartForSeries(series, labels, interval) {
        const data = {}
        data['series'] = series
        data['labels'] = labels

        const options = {
          axisX: {
            labelInterpolationFnc: function (value) {
              return getLabelName(value, interval)
            }
          }
        }

        peopleChart.update(data, options, true)
      },
      async getPeopleStats() {
        try {
          const path = 'get_people_stats'
          const response = await this.$http.get(path, this.authToken)
          this.peopleLoaded = true
          // this.people = response.series
          this.updateChartForSeries(response.series, response.labels, response.interval)
        } catch (error) {} finally {}
      },
      setUpEventsDensityChart(){
        const vm = this

        const data = {
          labels: [],
          series: [
            []
          ]
        }

        const options = {
          axisX: {
            labelOffset: {
              x: -10,
              y: 10
            }
          },
          axisY: {
            labelOffset: {
              x: -10,
              y: 10
            },
            onlyInteger: true
          },
          fullWidth: true
        }

        eventsDensityChart = new Chartist.Line(this.$refs['events-chart'], data, options)
      },
      setUpPeopleChart() {
        const vm = this

        const data = {
          labels: [],
          series: [
            []
          ]
        }

        const options = {
          axisX: {
            labelOffset: {
              x: -10,
              y: 10
            }
          },
          axisY: {
            labelOffset: {
              x: -10,
              y: 10
            },
            onlyInteger: true
          },
          fullWidth: true
        }

        peopleChart = new Chartist.Line(this.$refs['people-chart'], data, options)

        // Let's put a sequence number aside so we can use it in the event callbacks
        let seq = 0
        let delays = 80
        const durations = 500
        vm.currentChartIndex = 0


        // Once the chart is fully created we reset the sequence
        peopleChart.on('created', function () {
          seq = 0
        })

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        peopleChart.on('draw', function (data) {
          let shdAnimate = data.type === 'line' || data.type === 'point'
          if (!shdAnimate) return

          if (data.seriesIndex !== vm.currentChartIndex) {
            data.element.remove()
            return
          }

          if (data.series.length) {
            if (seq === data.series.length) {
              setTimeout(() => {
                vm.currentChartIndex = vm.currentChartIndex === 2 ? 0 : ++vm.currentChartIndex
                peopleChart.update()
              }, 10000)
            }
          }

          seq++

          if (data.type === 'line') {
            data.element.animate({
              opacity: {
                begin: seq * delays + 1000,
                dur: durations,
                from: 0,
                to: 1
              }
            })
          } else if (data.type === 'point') {
            data.element.animate({
              x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              }
            })
          }

        })

        // For the sake of the example we update the peopleChart every time it's created with a delay of 10 seconds
        // peopleChart.on('created', function () {
        //   if (window.__exampleAnimateTimeout) {
        //     clearTimeout(window.__exampleAnimateTimeout)
        //     window.__exampleAnimateTimeout = null
        //   }
        //   window.__exampleAnimateTimeout = setTimeout(peopleChart.update.bind(peopleChart), 12000)
        // })
      }
    },
    beforeDestroy() {
      if (peopleChart !== null) {
        peopleChart.detach()
        peopleChart = null
      }
    },
    watch: {}
  }

</script>
