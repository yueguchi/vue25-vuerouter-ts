<template>
  <div class="login-modal">
    <v-ons-modal :visible="modalVisible">
      <div class="modal-parent">
        <div class="header">
          <span class="title">{{title}}</span>
        </div>
        <div class="contents">
          <p><v-ons-input modifier="material" type="text" placeholder="アカウント名" v-model="name"></v-ons-input></p>
          <p><v-ons-input modifier="material" type="password" placeholder="パスワード" v-model="pass"></v-ons-input></p>
          <div class="setting" v-show="type === ENUM_TYPES.NEW">
            <ul class="choices">
              <li class="item" @click="type = ENUM_TYPES.ALREADY">登録済みの方</li>
              <li class="item" @click="clear()">クリア</li>
              <li class="item" @click="registUser()">決定</li>
            </ul>
          </div>
          <div class="setting" v-show="type === ENUM_TYPES.ALREADY">
            <ul class="choices">
              <li class="item" @click="clear()">クリア</li>
              <li class="item" @click="doLogin()">決定</li>
            </ul>
          </div>
        </div>
        <div class="footer" v-show="type === ENUM_TYPES.ALREADY">
          <ul class="choices">
            <li class="item" @click="type = ENUM_TYPES.NEW">新規アカウント作成の方</li>
            <li class="item">アカウント・パスワードを忘れた方</li>
          </ul>
        </div>
      </div>
    </v-ons-modal>
  </div>
</template>

<script>
import * as MT from '../../store/const/mutation-types'
import * as ENUM from '../../util/const/AccountTypeEnum'

export default {
  name: 'Loginmodal',
  data () {
    return {
      title: 'アカウントを作成',
      name: '',
      pass: '',
      type: ENUM.ACCOUNT.NEW,
      modalVisible: true,
      ENUM_TYPES: ENUM.ACCOUNT
    }
  },
  methods: {
    clear () {
      this.name = ''
      this.pass = ''
    },
    registUser () {
      // axiosでpostし、Promiseのthenで以下のような処理が入る想定
      // ただし、axiosを実際に叩くのは、storeのaction。actionがPromiseを返す形になる
      this.$store.commit(MT.LOGIN_SUCCESS_MUTATION)
      this.clear()
      // emit
      this.$emit('emitSuccessRegist', {
        name: this.name,
        token: 'token from response'
      })
    },
    doLogin () {
      // axiosでpostし、Promiseのthenで以下のような処理が入る想定
      // ただし、axiosを実際に叩くのは、storeのaction。actionがPromiseを返す形になる
      this.$store.commit(MT.LOGIN_SUCCESS_MUTATION)
      this.clear()
      // emit
      this.$emit('emitSuccessLogin', {
        name: this.name,
        token: 'token from response'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
material-base-color = #009688

.modal-parent
  background-color: #fff;
  color #000
  width 80%
  margin auto
  padding-top 10px
  padding-bottom 10px
  .header
    .title
      font-weight bold
  .contents
    .setting
      .choices
        display flex
        justify-content space-around
        padding 35px
        padding-top 0
        padding-bottom 0
        .item
          list-style none
          font-size 12px
        .item:first-child,.choice:last-child
          color material-base-color
  .footer
    border-top solid 1px rgba(175, 175, 175, 0.5)
    .choices
      .item
        text-align left
        list-style none
        font-size 12px
        margin-top 5px
      .item:first-child
        color material-base-color
</style>
