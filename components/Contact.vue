<template>
  <div id="contact" style="background-color:#EFEFEF;">
    <v-container>
        <v-card width="100vw" height="613px" class="pt-5">
          <v-card-title class="mb-5 pa-5 justify-center font-italic display-1">
            Contact
          </v-card-title>
          <!-- <iframe :src="src" width="100%" height="740px" frameborder="0" marginheight="0" marginwidth="0">
          </iframe> -->
          <v-row>
            <v-col cols="12" class="mt-16" align="center" width="100%">
                <form name="contactus" method="post" data-netlify="true">  <!--  read this page  https://docs.netlify.com/forms/setup/ -->
                  <input type="hidden" name="form-name" value="contactus" height="100px" />
                  <v-row>  
                    <v-col cols="4">
                      <label class="headline">Name : </label>
                    </v-col>
                    <v-col cols="6" class="mr-10"> 
                      <input class="mt-1" type="text" name="name" v-model="name" style="width:100%; border-bottom: 2px solid lightgrey;" />
                    </v-col>
                  </v-row>
                  <v-row>  
                    <v-col cols="4" class="mt-8">
                      <label class="headline">Email : </label>
                    </v-col>
                    <v-col cols="6" class="mr-10 mt-9"> 
                      <input type="email" name="email" v-model="email" style="width:100%; border-bottom: 2px solid lightgrey;" />
                    </v-col>
                  </v-row>
                  
                  <v-row>  
                    <v-col cols="4" class="mt-8">
                      <label class="headline">Message: </label>
                    </v-col>
                    <v-col cols="6" class="mr-10 mt-9"> 
                      <textarea name="message" v-model="message" style="width:100%; border-bottom: 2px solid lightgrey;"></textarea>
                    </v-col>
                  </v-row>
                  
                  <v-col>
                    <button type="submit" style="width:20%; background-color: #424242;" class="title  lighten-4 px-4 color white--text pt-1 pb-1 rounded mt-12">Send</button>
                  </v-col>
                </form>
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
        // src: "https://docs.google.com/forms/d/e/1FAIpQLSfI__zZPkKLKLu00vsnacTpc56an199Xrzsfu9oyi1MSGx_DQ/viewform?embedded=true" 
      } 
    }
  }
</script>
<style>
form {
  width:100%;
}

</style>