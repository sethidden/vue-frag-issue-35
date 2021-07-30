<template>
<div v-frag>
  <div id="1">I'm invisible to selenium!</div>
  <div id="2">I'm invisible to selenium!</div>
</div>
</template>

<script>
import frag from 'vue-frag';
export default {
  name: 'HelloWorld',
  directives: {
    frag
  }
}
</script>
