<template>
   <div>
    <!-- <p>当前最新的count值为:{{count}}</p> -->
     <p>当前最新的count值为:{{showNum}}</p>
     <!-- <button @click="btnHandle1">-1</button>
     <button @click="btnHandle2">-{{n}}</button>
     <button @click="btnHandle11">-1(Async)</button>
     <button @click="btnHandle22">-{{n}}(Async)</button> -->
     <!-- 简化上面的操作，可以直接调用actions里的函数,直接用actions里的函数作为点击事件的触发函数 -->
      <button @click="sub">-1</button>
      <button @click="subN(n)">-{{n}}</button>
      <button @click="subAsync">-1(Async)</button>
      <button @click="subNAsync(n)">-{{n}}(Async)</button>
   </div>
</template>

<script>
//组件中访问state中数据的第2种方式
//触发mutations的第二种方式，触发actions的第二种方式
//1.从vuex中按需导入mapState函数
//组件中使用store中getters的第2种方式 mapGetters
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

export default {
  name: 'Subtraction',
  data(){
    return{
      n:3
    }
  },
  components: {
   
  },
  //通过刚导入的mapState函数，将当前组件需要的全局数据映射为当前组件的computed计算属性
  //2.将全局数据映射为当前组件中的计算属性
  computed:{
    //...是展开运算符的意思
    //组件中访问state中数据的第2种方式
     ...mapState(['count']),

     //组件中使用store中getters的第2种方式 mapGetters
     ...mapGetters(['showNum'])
  },
  methods:{
    //触发mutations的第二种方式
    ...mapMutations(['sub','subN']),

    //触发actions的第二种方式
    ...mapActions(['subAsync','subNAsync']),

    // btnHandle1(){
    //   //这里可以使用mapMutations中的函数
    //   this.sub();
    // },
    
    // btnHandle2(){
    //   //这里可以使用mapMutations中的函数
    //   //传递参数3
    //   this.subN(this.n);
    // },

    // btnHandle11(){
    //   //这里可以使用mapMutations中的函数
    //   this.subAsync();
    // },
    
    // btnHandle22(){
    //   //这里可以使用mapMutations中的函数
    //   //传递参数3
    //   this.subNAsync(this.n);
    // },
  }
}
</script>

<style>

</style>
