<template>
  <div>
    <nav-header></nav-header>
    <section>
      <aside class="as-1">
        <router-link to="/literature">
          <div class="c-1" @click="show=false">
            <img class="icon" src="/static/m1.png"></img>
            <p>文学艺术</p>
          </div>
        </router-link>
        <router-link to="/science">
          <div class="c-1" @click="show=false">
            <img class="icon" src="/static/m2.png"></img>
            <p>科学技术</p>
          </div>
        </router-link>
        <router-link to="/humanity">
          <div class="c-1" @click="show=false">
            <img class="icon" src="/static/m3.png"></img>
            <p>人文社科</p>
          </div>
        </router-link>
        <div @click="show=!show" class="nav-shop">
          <img class="icon" src="/static/shopping_cart.png"></img>
          <p>price:￥{{totalPrice}}</p>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
      </aside>
      <article>
        <transition name="fade-more">
          <div v-show="show" class="shopcart-list" >
            <div class="list-header">
              <p class="title">购物车</p>
              <p class="top-empty" @click.stop="topempty">清空</p>
            </div>
            <div class="list-content">
              <ul>
                <li v-for="book in selectGoods">
                  <div class="good">
                    <img class="image" :src="book.img">
                    <div class="name">{{book.name}}</div>
                    <div class="price">￥{{book.price}}</div>
                    <div class="empty" @click.stop="empty(book,index)"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list-footer">
              <div class="total">合计：￥{{totalPrice}}</div>
              <div class="sum" :class="{highlight:totalPrice>0}" @click.stop="pay">去结算</div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <router-view @add="addTocart" :science="science" :literature="literature" :humanity="humanity" :selectGoods="selectGoods">
          </router-view>
        </transition>
      </article>
    </section>
    <nav-footer></nav-footer>
  </div>
</template>

<style lang="scss" type="text/css">
  @import '@/assets/css/base.scss';
  @import '@/assets/css/inner.scss';
</style>

<script>
  import NavHeader from '@/components/NavHeader.vue'
  import NavFooter from '@/components/NavFooter.vue'
  import { getScience , getLiterature , getHumanity } from '@/api'
  
  export default {
    name: 'App',
    data () {
      return {
        science: [],
        literature: [],
        humanity: [],
        selectGoods: [],
        show:false
      }
    },
    created() {
      getScience().then((science) => {
        this.science = science
      })
      getLiterature().then((literature) => {
        this.literature = literature
      })
      getHumanity().then((humanity) => {
        this.humanity = humanity
      })
    },
    computed:{
      totalPrice(){
        let total = 0;
        this.selectGoods.forEach((item) =>{
          total += item.price
        });
        return total;
      },
      totalCount(){
        let count = 0;
        this.selectGoods.forEach((item) => {
          count += item.count;
        });
        return count;
      }
    },
    methods:{
      addTocart(selectGoods){
        this.selectGoods = selectGoods;
      },
      topempty(){
        this.selectGoods = [];
      },
      empty(book,index){
        this.selectGoods.splice(index,1);
      },
      pay(){
        if(this.totalPrice>0){
          window.alert(`支付${this.totalPrice}元`);
        }
      }
    },
    components: {
      NavHeader,
      NavFooter
    }
  }
</script>