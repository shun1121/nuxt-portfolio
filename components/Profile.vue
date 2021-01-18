<template>
  <div style="background-color:#EFEFEF;" id="profile"> <!-- id="profile -->
    <v-container>  <!-- fluidオプション 左右いっぱいに広げる -->
      <v-card width="100vw" height="100%" style="background-color:white;"> 
        <v-card-title class="pa-10 justify-center font-italic display-1" style="color:black;">
          Profile
        </v-card-title>

        <v-row justify="center" align-content="center">
          <v-col cols="12" md="5" align="center">
            <v-row align-content="center" justify="space-around" style="height:100%">  
              <v-avatar width="80%" height="auto">
                <img src="/images/nearthesea.png" alt="Shun's portrait" style="object-fit: cover;">
              </v-avatar>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-list style="background-color:white;">
              <v-list-item v-for="profile in profiles" :key="profile">
                <!-- <v-list-item-content> -->
                <v-row> 
                  <v-col cols="1">
                    <v-icon style="color:black;">{{profile.icon}}</v-icon>
                  </v-col>
                  <v-col cols="11">
                    <v-text class="title" style="color:black;">{{profile.info}}</v-text>
                  </v-col>
                </v-row>   
                <!-- </v-list-item-content> -->
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      profiles: [
        {info: 'I am Shunsuke Fukunishi.', icon: 'mdi-chevron-double-right'},
        {},
        {info: 'I come from Mie, Japan.', icon: 'mdi-chevron-double-right'},
        {},
        {info: 'I am studying German literature at Kwanseigakuin University.', icon: 'mdi-chevron-double-right'},
        {},
        {info: 'I am also studying computer programing aside from it.', icon: 'mdi-chevron-double-right'},
        {},
        {info: 'I spend my free time watching anime, reading comic books, painting pictures, practicing gymnastics.', icon: 'mdi-chevron-double-right'},
        {},
      ]
    }),
  }
</script>
