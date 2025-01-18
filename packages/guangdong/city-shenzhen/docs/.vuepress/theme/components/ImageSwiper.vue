<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// 引入必要的 CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 定义组件的 props
const props = defineProps({
  // 轮播图数据
  items: {
    type: Array,
    required: true
  },
  // 配置项
  config: {
    type: Object,
    default: () => ({
      height: 500,
      showInfo: true
    })
  }
})
</script>

<template>
  <Swiper
    :modules="[Pagination, Navigation, Autoplay]"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    :navigation="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :class="['mySwiper', { 'hide-info': !config.showInfo }]"
    :style="{ height: `${config.height}px` }"
  >
    <SwiperSlide v-for="item in items" :key="item.link" class="image-slide">
      <img :src="item.link" :alt="item.title">
      <div class="slide-info">
        <div class="info-content">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
          <div class="meta">
            <span class="author">{{ item.author }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
/* 将原来的所有样式复制到这里 */
.mySwiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 信息层样式 */
.slide-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: #fff;
  padding: 10px;
  transform: translateY(calc(100% - 65px)); /* 默认只显示标题部分 */
  transition: transform 0.3s ease;
}

/* 鼠标悬浮时整体上移 */
.image-slide:hover .slide-info {
  transform: translateY(0);
}

.info-content {
  padding: 6px 24px;
}

.title {
   margin: 0 0 12px 0;
  font-size: 1.5em;
  color: #ffffff; /* 纯白色，不透明 */
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: left;
  width: 100%;
  line-height: 1.4;
  padding-bottom: 5px;
  text-shadow: none; /* 移除阴影 */
}

.description {
  margin: 0 0 15px 0;
  font-size: 1.1em;
  line-height: 1.5;
  color: #ffffff; /* 纯白色，完全不透明 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  text-align: left; /* 确保左对齐 */
  width: 100%; /* 确保占满容器宽度 */
  max-width: 100%; /* 移除之前的宽度限制 */
}

/* 鼠标悬浮时保持纯白色 */
.image-slide:hover .title,
.image-slide:hover .description {
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.9);
}

.author,
.date {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 导航按钮样式 */
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

/* 分页器样式 */
.swiper-pagination-bullet {
  background: #fff;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background: #fff;
  opacity: 1;
}

/* 隐藏信息的样式 */
.hide-info .slide-info {
  display: none;
}
</style>