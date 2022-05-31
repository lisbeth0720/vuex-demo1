<template>
    <!-- <p>当前最新的count值为:{{$store.state.count}}</p> -->
    <p>当前最新的count值为:{{$store.getters.showNum}}</p>
      <button @click="btnHandle1">+1</button>
      <button @click="btnHandle2">+{{n}}</button>
      <button @click="btnHandle11">+1(Async)</button>
      <button @click="btnHandle22">+{{n}}(Async)</button>
</template>

<script>
//组件中访问state中数据的第1中方式
//this.$store.state.全局数据名称  (template中可以省略掉this)
//this.$store.state.count

//组件中使用store中getters的第一种方式 this.$store.getters.showNum
export default {
  name: 'Addition',
  data(){
    return{
      n:3
    }
  },
  components: {
   
  },
  methods:{
    btnHandle1(){
      //vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改
      // this.$store.state.count++;

      //vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改
      
      //触发mutations中的第一种方式
      //commit()的作用就是触发调用某个mutations

      //1.this.$store.commit()是触发mutations的第一种方式
      
      //commit的作用就是调用某个mutation函数
       this.$store.commit('add')
       //2.触发mutations的第二种方式
       //2.1从vuex中导入mapMutations
       //import {{mapMutations}} from 'vuex'
       //2.2通过刚导入的mapState函数，将当前组件需要的全局数据映射为当前组件的methods
       //2.2将全局数据映射为当前组件中的methods-在Subtration组件中用了
    },
    
    btnHandle2(){
      //触发mutations时携带参数
       this.$store.commit('addN',this.n)
    },

    //异步操作
    btnHandle11(){
      //vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改
      // this.$store.state.count++;

      //vuex中推荐在Mutitions中修改state中的数据，不推荐在组件中直接通过this.$store来修改
      //触发mutations中的第一种方式
      //commit()的作用就是触发调用某个mutations

      //1.this.$store.commit()是触发mutations的第一种方式
      // this.$store.commit('add')
       //2.触发mutations的第二种方式
       //2.1从vuex中导入mapMutations
       //import {{mapMutations}} from 'vuex'
       //2.2通过刚导入的mapState函数，将当前组件需要的全局数据映射为当前组件的methods
       //2.2将全局数据映射为当前组件中的methods-在Subtration组件中用了

      //新需求，点击+1，1秒后+1，用了setTimeOut，由于setTimeOut是异步，所以需要在action里执行
      //1.触发action的第一种方式 dispatch
       this.$store.dispatch('addAsync')
    },
    
    btnHandle22(){

      //携带参数
      //新需求，点击+1，1秒后+1，用了setTimeOut，由于setTimeOut是异步，所以需要在action里执行
      //触发action的第一种方式 dispatch
       this.$store.dispatch('addNAsync',this.n)
       
    },
  }
}
</script>

<style>

    div button{
      margin-left:10px;
    }
    
</style>
