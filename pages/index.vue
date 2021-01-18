<template>
    <div>
        <!-- 各コンポーネント呼び出し -->
        <Top />
        <v-divider></v-divider>
        <Profile />
        <v-divider></v-divider>
        <Background />
        <v-divider></v-divider>
        <Works />
        <v-divider></v-divider>
        <Contact />
    </div>
</template>
<script>
// コンポーネントインポート
import Top from '~/components/Top.vue'
import Profile from '~/components/Profile.vue'
import Background from '~/components/Background.vue'
import Works from '~/components/Works.vue'
import Contact from '~/components/Contact.vue'

export default {
// コンポーネント登録
  components: {
    Top,
    Profile,
    Background,
    Works,
    Contact
  }
}
</script>