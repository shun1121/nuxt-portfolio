<template>
  <div id="contact" style="background-color:#EFEFEF;">
    <v-container>
        <v-card width="100vw">
          <!-- <iframe :src="src" width="100%" height="740px" frameborder="0" marginheight="0" marginwidth="0">
          </iframe> -->
          <form name="contact" method="post" data-netlify="true">
            <p>
              <input type="hidden" name="form-name" value="contact" />
              <label>Your Name: <input type="text" name="name" style="background-color:lightblue;" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" style="background-color:lightblue;" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message" style="background-color:lightblue;"></textarea></label>
            </p>
            <p>
              <button type="submit" class="primary">Send</button>
            </p>
          </form>
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