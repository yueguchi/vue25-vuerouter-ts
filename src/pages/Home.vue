<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{isLogin.account.isLogin}} : {{getLoginStatus}}</p>
    <button @click="doLogin">ログイン</button>
    <button @click="doLogout">ログアウト</button>
    <br>
    <br>
    <br>
    <select v-model="condition">
      <option value="hoge">hoge</option>
      <option value="fuga">fuga</option>
      <option value="piyo">piyo</option>
    </select>
    <router-link :to="{ name: 'Foo', params: {msg: condition} }" >Go to Foo</router-link>
    <a href="" @click="goback">＜＜戻る</a>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import Vue from 'vue'
import * as MT from '../store/const/mutation-types'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      msg: 'ホーム画面(ログイン者専用)',
      condition: 'fuga'
    }
  },
  computed: {
    ...mapState({
      // TODO state.account.isLoginを返したい
      isLogin: state => state
    }),
    ...mapGetters({
      getLoginStatus: 'getLoginStatus'
    })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    doLogin () {
      this.$store.commit(MT.LOGIN_SUCCESS_MUTATION)
    },
    doLogout () {
      this.$store.commit(MT.LOGOUT_SUCCESS_MUTATION)
    }
  }
})
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
