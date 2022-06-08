<script setup>
import { reactive } from 'vue'

const state = reactive({ primary: false })
</script>

<template>
  <Story title="WorkingExample">
    <template #controls>
      <input :value="true" v-model="state.primary" type="checkbox">primary
    </template>
    <p>The pen is {{ state.primary ? 'blue' : 'red' }}</p>
  </Story>
</template>

