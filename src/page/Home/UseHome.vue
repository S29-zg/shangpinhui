<script>
import {defineComponent} from 'vue'
import UseBrand from "@/page/Home/Brand/UseBrand.vue";
import UseFloor from "@/page/Home/Floor/UseFloor.vue";
import UseLike from "@/page/Home/Like/UseLike.vue";
import UseListContainer from "@/page/Home/ListContainer/UseListContainer.vue";
import UseRank from "@/page/Home/Rank/UseRank.vue";
import UseTodayRecommend from "@/page/Home/TodayRecommend/UseTodayRecommend.vue";
import UseTypeNav from "@/page/Home/TypeNav/UseTypeNav.vue";

export default defineComponent({
    name: "UseHome",
    components: {
        UseBrand,
        UseFloor,
        UseLike,
        UseListContainer,
        UseRank,
        UseTodayRecommend,
        UseTypeNav
    }
})
</script>

<template>
    <div>
        <UseTypeNav></UseTypeNav>
        <UseListContainer></UseListContainer>
        <UseTodayRecommend></UseTodayRecommend>
        <UseRank></UseRank>
        <UseLike></UseLike>
        <UseFloor></UseFloor>
        <UseBrand></UseBrand>
    </div>

</template>

<style scoped lang="less">

</style>