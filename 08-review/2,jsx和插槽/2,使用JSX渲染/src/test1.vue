<template>
    <div>
       <template v-for="(item,index) in data">
           <li :key="index">{{item}}</li>
           <!-- <span :key="index">{{item}}</span> -->
           <!-- <a :key="index" href="">{{item}}</a> -->
       </template>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            type:Array
        },
    }
}
</script>