<script setup>
import fButton from './fButton.vue'
import { reactive } from 'vue'

const state = reactive({ primary: false })
</script>

<template>
  <Story title="Example">
    <template #controls>
      <input :value="true" v-model="state.primary" type="checkbox">primary
    </template>
    <f-button :primary="state.primary">Hello world</f-button>
    <p>The pen is {{ state.primary ? 'blue' : 'red' }}</p>
  </Story>
</template>
