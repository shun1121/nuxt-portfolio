<template>
  <div id="contact" style="background-color:#EFEFEF;">
    <v-container>
        <v-card width="100vw" height="750px">
          <!-- <v-card-title class="justify-center font-italic display-1"> -->
            <!-- Contact -->
          <!-- </v-card-title> -->
          <iframe :src="src" width="100%" height="740px" frameborder="0" marginheight="0" marginwidth="0">
          </iframe> 
          
        </v-card>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        src: "https://docs.google.com/forms/d/e/1FAIpQLSfI__zZPkKLKLu00vsnacTpc56an199Xrzsfu9oyi1MSGx_DQ/viewform?embedded=true"
      } 
    }
  }
</script>
<style>
form {
  width:100%;
}

</style>