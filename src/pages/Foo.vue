<template>
  <transition name="slide-left">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <a @click="goback()">＜＜Go Back</a>
      <input type="text" v-model="msg"/>
      <button @click="hogehoge(msg)">送信</button>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Foo',
  data () {
    return {
      msg: this.$route.params.msg
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    hogehoge (msg: string) {
      alert(msg)
    }
  }
})
</script>

<style scoped>
</style>
