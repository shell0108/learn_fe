<template>
  <div style="display: flex; justify-content: space-evenly">
    <p v-for="number in nums" :key="number.id" class="showNumber">
      {{ number.value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SixNumber",
  props: {
    numbers: {
      type: Number,
    },
  },
  mounted() {
    this.nums = convert2Six(this.numbers);
  },
  data() {
    return {
      nums: [],
    };
  },
  method: {
    convert2Six(number) {
      //将一个数字转换为6位的数字
      const arr = [];
      let count = 0;
      while (number) {
        arr.push(number % 10);
        number = parseInt(number / 10);
        count++;
      }
      //不足6位则补0到6位
      while (count < 6) {
        arr.push(0);
        count++;
      }
      //现在arr里面是逆序的
      return arr.reverse();
    },
  },
};
</script>

<style lang="scss" scope>
.showNumber {
  @media screen and (max-width: 1440px) and (min-width: 1280px) {
    width: 20px;
    height: 40px;
    font-size: 25px;
    padding-top: 12px;
    margin-top: 10px;
  }
  width: 30px;
  height: 100px;
  color: white;
  background: rgb(15, 224, 250, 0.8);
  padding-left: 3px;
  padding-top: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 45px;
}
</style>

<six-number :number = downCount/>

<script>
import SixNumber from "./SixNumber.vue"

export default {
    data() {
        return{
            downCount: 0;
        }
    },
    components: {
        SixNumber
    },

    mounted() {
        //向后端请求数据，放进downCount里，再作为props传入子组件
        this.getData();
    }
}
</script>
