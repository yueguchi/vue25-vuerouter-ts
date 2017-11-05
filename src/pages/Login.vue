<template>
  <div class="login">
    <login-modal
      v-on:emitSuccessRegist='receiveRegistered'
      v-on:emitSuccessLogin='receiveLogin'>
    </login-modal>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import Vue from 'vue'
import LoginModal from '../components/account/LoginModal.vue'
import * as PAGE_ENUM from '../util/const/PageNameEnum'

export default Vue.extend({
  name: 'Login',
  data () {
    return {}
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
    receiveRegistered (name: string, token: string) {
      this.$router.push(PAGE_ENUM.PAGE_NAME.HOME)
    },
    receiveLogin (name: string, token: string) {
      this.$router.push(PAGE_ENUM.PAGE_NAME.HOME)
    }
  },
  components: {
    LoginModal
  }
})
</script>

<style scoped>
</style>
