<template>
  <div id="top" style="background-color:#EFEFEF;">
    <!--  -->
    <v-container class="pt-0">  <!-- fluidオプション　左右いっぱいに広げる -->
      <v-card app width="100vw" > 
        <!-- :classは値が正のときclassに取って変わる　　headlineは文字の太さ、$vuetify.breakpoint.smAndDownはbreakpointがsm以下の時はtrue -->
        <v-img 
        class="font-italic align-end text-center" 
        :class="{'headline': $vuetify.breakpoint.smAndDown, 'display-1': $vuetify.breakpoint.mdAndUp}" 
        src="/images/ShuninNZ.jpg"
        >
          <p style="color:white;" class="pt-6">You are the youngest at this moment.</p>
          <p style="color:white;" class="mb-16 pb-5">Let's take action sooner rather than later!</p>
        </v-img>
      </v-card>
    </v-container>
  </div>
</template>



