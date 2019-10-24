<style type="text/css">
  #cz{
    border: 0px solid white;
    background: white;
    font-size: 17px;
    color: cornflowerblue;
    margin-top: 20px;
  }
</style>

<template>
  <form>
    <p>2.请选择您的兴趣爱好：</p>
    <label><input  type="checkbox" value="看书"  v-model="hobby"/>看书</label>
    <label><input  type="checkbox" value="游泳"   v-model="hobby" />游泳</label>
    <label><input  type="checkbox" value="跑步"   v-model="hobby" />跑步</label>
    <label><input  type="checkbox" value="看电影"  v-model="hobby" />看电影</label>
    <label><input  type="checkbox" value="听音乐"  v-model="hobby" />听音乐</label>
    <label><input  type="checkbox" value="动漫"   v-model="hobby" />动漫</label><br>
    <router-link to="/" style="text-decoration: none;margin-right: 10px">上一步</router-link>
    <button @click="doClick2()">下一步</button>
    <input type="reset" value="重置" id="cz"/>
  </form>
</template>
<script>
  export default {
    name: "about",
    data(){
      return{
        hobby:[]
      }
    },
    methods :{
      doClick2(){
        this.$store.commit("doClick2",{hobby:this.hobby});
        this.$router.push('/third');
      }
    }

  }
</script>