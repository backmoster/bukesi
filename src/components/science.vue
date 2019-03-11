<template>
  <div>
    <ul>
      <li v-for="item in science">
        <div v-if = "science" @click="showDetail(item)" class="block">
          <img id="img-3" :src="item.img">
          <p class="bname">{{item.name}}</p>
          <p>作者：{{item.author}}</p>
          <p>价格：￥{{item.price}}</p>
        </div>
        <transition name="fade">
          <div v-show="item.show" class="detail">
            <div class="detail-wrapper">
              <div class="title">
                <div class="line"></div>
                <div class="text">简介</div>
                <div class="line"></div>
              </div>
              <div class="bdetail">
                <p>{{item.introduce}}</p>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">图片</div>
                <div class="line"></div>
              </div>
              <div class="bdetail">
                <img :src="item.img1">
                <img :src="item.img2">
                <img :src="item.img3">
              </div>
            </div>
            <div @click.stop="addTocart(item)" class="add-to-cart">Add to cart</div>
            <div class="detail-close" @click="hideDetail(item)"></div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'science',
    methods:{
      showDetail(item){
        item.show = !item.show
      },
      hideDetail(item){
        item.show = false
      },
      addTocart(item){
        Vue.set(item, 'count', 1);
        if(this.selectGoods.indexOf(item)===-1)
        {
          this.selectGoods.push(item);
        }
        this.$emit('add', this.selectGoods);
      }
    },
    props: {
      science: { type:Array },
      selectGoods: { type:Array }    
    }
  }
</script>

