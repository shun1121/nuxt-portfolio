import Vue from 'vue' //vueのインポート
import VueScrollTo from 'vue-scrollto' // 先ほどインストールしたライブラリをインポート

//ライブラリの登録とオプションの指定
Vue.use(VueScrollTo, {
  /* オプション色々あります。公式サイトから確認できます。 */
  duration: 700,
  easing: "ease",
  offset: -40
})