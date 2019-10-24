<template>
    <form >
        <p>您的性别是：{{this.$store.state.sex}}</p>
        <p>您的爱好是：{{this.$store.state.hobby}}</p>
        <p>个人简介：{{this.$store.state.txt}}</p>
    </form>
</template>

<script>
    export default {
        name: "fourth"
    }
</script>

