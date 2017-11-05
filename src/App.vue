<template>
  <div id="app">
    <div id="transition-area" :class="transitionName">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  mounted () {
    document.querySelector('#transition-area').addEventListener('webkitAnimationEnd', (e) => {
      this.transitionName = ''
    })
  }
})
</script>

<style>

/* 進む */
.slide-left {
    position: absolute;
    right: -100%;
    width: 100%;
    height: 100%;
    -webkit-animation: slide-right 0.5s forwards;
    -webkit-animation-delay: 0s;
    animation: slide-right 0.5s forwards;
    animation-delay: 0s;
}

@-webkit-keyframes slide-right {
    100% { right: 0; }
}

@keyframes slide-right {
    100% { right: 0; }
}

/* 戻る */
.slide-right {
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    -webkit-animation: slide-left 0.5s forwards;
    -webkit-animation-delay: 0s;
    animation: slide-left 0.5s forwards;
    animation-delay: 0s;
}

@-webkit-keyframes slide-left {
    100% { left: 0; }
}

@keyframes slide-left {
    100% { left: 0; }
}
</style>
