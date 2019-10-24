
<style type="text/css">
    #cz,button{
        border: 0px solid white;
        background: white;
        font-size: 17px;
        color: cornflowerblue;
        margin-top: 20px;
    }

</style>

<template>
    <form>
        <p>3.请介绍一下自己：</p>
        <textarea rows="5" cols="30" placeholder="请输入内容" v-model="txt"></textarea><br>
        <button type="submit" @click="doClick3()">提交</button>
        <router-link to="/About" style="text-decoration: none">上一步</router-link>
        <input type="reset" value="重置" id="cz"/>
    </form>
</template>

<script>
    export default {
        name: "third",
        data(){
            return{
                intro:''
            }
        },
        methods :{
            doClick3(){
                this.$store.commit("doClick3",{txt:this.txt});
                this.$router.push('/fourth');
            }
        }
    }
</script>

<style scoped>

</style>