<template>
<div class="container">
    <navbar :title="title" :back="back"></navbar>
</div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
    name: 'edit_img_header',
    components: {
        Navbar
    },
    data() {
        return {
            pageName: '',
            title: '',
            back: true
        }
    },
    mounted() {
        const self = this
        let pageParam = api.pageParam
        self.back = pageParam.back || true
        self.pageName = pageParam.pageName
        self.title = pageParam.title
        setTimeout(() => {
            self.$comm.openFrame(pageParam.pageName, pageParam)
        }, 0)
    }
}
</script>

<style lang="scss">
header {
    background: #000 !important;
}
</style>
