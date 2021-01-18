<template>
  <v-card>
    <v-card-title>
      Dialog  
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Name" v-model="returnData.name" required></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field label="Emall" v-model="returnData.email" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
  // 親コンポーネントからのデータはpropsで受け取ることができます。
  // props: {
  //     name: '',
  //     email: ''
  // },
  data() {
    return {// 値はpropsに引き渡される？
      returnData: {
        name: this.name,
        email: this.email
      }
    }
  },
  methods: {
    // 親コンポーネントではsubmit()関数はclickSubmitとして引き渡される。
    submit() {
      this.$emit('clickSubmit', this.returnData)
      console.log("child")
    }        //propsの値は？propsは今回は必要ない。
  }
}
</script>