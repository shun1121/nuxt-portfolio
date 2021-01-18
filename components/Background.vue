<template>
  <div id="background" style="background-color:#EFEFEF;"> <!-- id="profile -->
    <v-container>  <!-- fluidオプション 左右いっぱいに広げる -->
      <!-- <v-row> -->
        <!-- <v-col> -->
          <div>
            <v-card width="100vw" class="pa-4" height="100%"> <!-- style="background-color:white;"-->
              <v-card-title class="pa-5 justify-center font-italic display-1">
                Background
              </v-card-title>
                <div class="py-4">
                  <v-timeline :dense="dense" class="mx-5"> <!-- class="pt-0 mb-0" style="height:510px;" -->
                    
                      <v-timeline-item v-for="(event,i) in events" :key="i" fill-dot small :color="event.color"> <!-- class="pt-0" -->
                        <!-- <v-col cols="6"> -->
                          <v-card dense right>
                            <v-card-title class="py-0 black--text" style="background:#87cefa;">
                              {{event.title}}
                            </v-card-title>
                            <v-card-text class="pt-4 pb-1" style="background-color:white; color:black;">
                              {{event.content}}
                            </v-card-text>
                          </v-card>
                        <!-- </v-col> -->
                      </v-timeline-item>
                  </v-timeline>
                </div>  
            </v-card>
          </div>      
        <!-- </v-col>   -->
      <!-- </v-row>   -->
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        events: [
          {
            title: 'Working on a different portfolio and doing job hunting',
            year: '2020',
            content: 'enter Kwanseigakuin Uni buffolo buffolobuffolo buffoloenter Kwanseigakuin Uni buffolo buffolobuffolo buffolo',
            color: '#00008b'
          },
          {
            title: 'Joined Kobe Programming Academy',
            year: '2020',
            content: 'I worked on tasks about algorithm using Node.js and passed a test to move on to the next step. Then, I started learning Ruby on Rails and Nuct.js to make an application.',
            color: 'light-blue'
          },
          {
            title: 'Started studyng programming',
            year: '2020',
            content: 'I started studying programming using progate and learned HTML, CSS, JavaScript.',
            color: 'light-green'
          },
          {
            title: 'Had an exchange program',
            year: '2019',
            content: 'I studied at University of Canterbury in New Zealand. That experience was a huge impact to me.',
            color: 'green'
          },
          {
            title: 'Graduated from Tsu high school',
            year: '2017',
            content: 'I was interested in other languages since I liked English back then.',
            color: 'green'
          },
        ]
      }
    },

    computed: {
      dense () {
        return this.$vuetify.breakpoint.smAndDown
      }
    }
  }
</script>