<template>
  <div id="works" style="background-color:#EFEFEF;"> <!-- id="profile -->
    <v-container>  <!-- fluidオプション　左右いっぱいに広げる -->
      <v-card width="100vw" height="100%">
        <v-card-title class="font-italic justify-center display-1">
            Works
        </v-card-title>
        <v-row>
          <v-col v-for="work in works" :key="work" :cols="work.cols" :sm="work.sm" class="pa-10">
            <a>
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 4" :class="{ 'on-hover' : hover }">
                  <v-img :src="work.picture" alt="flexsens" height="200px" class="align-end" gradient="to top right, rgba(160,155,255,.13), rgba(25,25,60,.4)"> <!-- class="align-end"は -->
                    <v-card-title v-text="work.title" class="headline justify-center white--text"></v-card-title>
                    <v-card-text v-text="work.skills" align="center" style="background-color:#0a0909;" class="white--text pb-1"></v-card-text>
                  </v-img>
                </v-card>  
              </v-hover>  
            </a>
          </v-col>  
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        works: [
          {
            title: 'Item Share App',
            skills: 'Ruby on Rails',
            content: 'I implemented websocket so that log-in users can send messages without reloading.',
            picture: '/images/item-share.jpg',
            cols: 12, 
            sm: 6, 
            md: 6,
          },
          {
            title: 'Member Site',
            skills: 'Ruby on Rails, Nuxt.js, AWS S3',
            content: 'I implemented websocket so so that log-in users can send messages without reloading.',
            picture: '/images/members.jpg',
            cols: 12, 
            sm: 6, 
            md: 6,
          },
          {
            title: 'Portfolio Site',
            skills: 'Nuxt.js',
            content: 'I implemented websocket so so that log-in users can send messages without reloading.',
            picture: '/images/ShuninNZ.jpg',
            cols: 12, 
            sm: 6, 
            md: 6,
          }
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