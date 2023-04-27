<script setup lang="ts">
import {onMounted, ref} from "vue";

let p = new Promise((resolve, reject) => {

})
const l1 = "[[Prototype]]: Promise[[PromiseState]]: \"pending\"[[PromiseResult]]: undefined"
onMounted(() => {
  console.log(p)
})
</script>

<template>
  {{ p }}
  <h1>这是测试界面</h1>
  <p>当新建一个promise对象的时候，什么都不做，得到的是一个pending对象</p>
  <pre>
    <code>
         {{l1}}

    </code>
  </pre>


</template>

<style scoped lang="less">

</style>
