<script >
import {defineComponent} from 'vue'
import {mapState} from "vuex";

export default defineComponent({
    name: "UseSearch",
    computed:{
        ...mapState('search',['shopList'])
    },
    mounted() {
        this.$store.dispatch('search/searchShopByLevel1',this.$route.query)

    }
})
</script>

<template>
<UseTypeNav></UseTypeNav>
</template>

<style scoped lang="less">

</style>
