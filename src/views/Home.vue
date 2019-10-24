<style type="text/css">

  #cz{
    border: 0px solid white;
    background: white;
    font-size: 17px;
    color: cornflowerblue;
    margin-top: 20px;
  }
  router-link{
    margin-left: 20px;
  }

</style>

<template>
  <form>
    <p>1.请问您的性别是：</p>
    <label><input name="sex" type="radio" value="男" v-model="sex"/>男 </label>
    <label><input name="sex" type="radio" value="女" v-model="sex"/>女 </label>
    <label><input name="sex" type="radio" value="保密" v-model="sex" checked="checked" />保密 </label><br>
    <button @click="doClick1()">下一步</button>
    <input type="reset" value="重置" id="cz"/>
  </form>
</template>

<script>
  export default {
    name: "sex",
    data() {
      return {
        sex: '',
      }
    },
    methods :{
      doClick1(){
        this.$store.commit("doClick1",{sex:this.sex});
        this.$router.push('/about');

      }
    }
  }
</script>