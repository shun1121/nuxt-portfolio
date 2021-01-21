<template>
  <v-app dark v-cloak>
    <v-app-bar app color="#000080" dense clippedLeft>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <v-spacer></v-spacer>
        <v-toolbar-title style="color:white;" class="ml-10">Welcome to my page!</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer permanent expandOnHover app>
      <v-list nav dense rounded>
        <v-list-item-group v-model="group" active-class="light-blue--text text--accent-4">
          
          <nuxt-link v-scroll-to="'#top'" to> 
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Top
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#profile'" to> 
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Profile
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#background'" to>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-history</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  Background
                </v-list-item-title>
              </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#works'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Works
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>

          <nuxt-link v-scroll-to="'#contact'" to>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Contact
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>

        </v-list-item-group> 
      </v-list> 
    </v-navigation-drawer>

    <!-- ページ埋め込み（pages/*.vueの内容が埋め込まれる） -->
    <v-content fluid>
      <nuxt />
    </v-content>

    <v-footer app color="#000080">
      <v-spacer />
      <span style="color: white">&copy; {{ now }} Shunsuke Fukunishi all rights reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      now: "",
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Welcome'
    }
  },
  computed: {},
  created () {
    const date = new Date()
    // console.log(date)
    this.now = date.getFullYear()
  }
}
</script>
<style>
  [v-cloak] {
    display: none;
  }
  .v-application a { /* id="app" v-applicationコンテンツ全体 */
    color: white;
    text-decoration: none;
  }

  .v-application {
  font-family:"Gill Sans", sans-serif;
}
</style>