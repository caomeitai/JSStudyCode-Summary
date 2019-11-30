<template>
    <div>
      <h2>Grandson中有{{$attrs.money}}块钱</h2>
      <button @click="$listeners.click">GrandsonBtn</button>
      <button @mousedown="$listeners.mousedown">GrandsonMouse</button>
    </div>
</template>

<script>
export default {
    methods: {
    },

}
</script>