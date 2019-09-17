<template>
    <div>
     <!-- 在模板中只能把h1~h6全部写一遍 -->
     <h1 v-if="n===1"><slot></slot></h1>
     <h2 v-else-if="n===2"><slot></slot></h2>
     <h3 v-else-if="n===3"><slot></slot></h3>
     <h4 v-else-if="n===4"><slot></slot></h4>
     <h5 v-else-if="n===5"><slot></slot></h5>
     <h6 v-else-if="n===6"><slot></slot></h6>
    </div>
</template>
<script>
export default {
    props:{
        n:{
            type:Number,
        }
    }
}
</script>