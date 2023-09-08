<template>
  <div class="swiper">
    <el-carousel
      :interval="5000"
      arrow="always"
    >
      <el-carousel-item
        v-for="item in 4"
        :key="item"
      ><img
          src="../assets/banner@2x.png"
          alt=""
        >
      </el-carousel-item>
    </el-carousel>
    <div class="news-container">
      <div class="news main">
        <div class="news-header">
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
          <span class="title">资讯动态</span>
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
        </div>
        <div class="news-content">
            
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style scoped lang="less">
.swiper {
  width: 100%;
  height: 400px;
  .el-carousel__item {
    img {
      width: 100%;
    }
  }
}

.news-container {
  width: 100%;
  height: 500px;
  background: url("../assets/dongtaibg.png") repeat-y;
  .main {
    width: 90%;
    height: 100%;
  }
  .news-header {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
    }
    .title {
      margin: 0 15px;
      font-family: "Source Han Serif CN";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
    }
  }
}
</style>