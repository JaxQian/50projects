<template>
  <input type="number" v-model="num" />
  <button class="btn" @click="run">run</button>
  <div class="text font-size-20">{{ numText }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { wait } from '~/utils/index'
const num = ref(0)
const numText = ref('0')
const time = 1
async function run() {
  let tempNum = 0
  const step = Math.floor(Math.max(num.value / 200, 1))
  while (tempNum < num.value) {
    tempNum += step
    numText.value = tempNum.toString()
    await wait(time)
  }
}
</script>

<style scoped lang="scss">

</style>