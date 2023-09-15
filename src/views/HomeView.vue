<template>
  <el-backtop
    :right="100"
    :bottom="100"
  >
    <img
      src="../assets/home/TOP@2x.png"
      alt=""
      class="back-to-top"
    >
  </el-backtop>
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
  </div>

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
        <div class="news-content-img">
          <el-carousel
            indicator-position="inside"
            height="300"
          >
            <el-carousel-item
              v-for="item in 4"
              :key="item"
            >
              <img
                src="../assets/home/img_feiyi.png"
                alt=""
              >
            </el-carousel-item>
          </el-carousel>

        </div>
        <div class="news-list">
          <div class="header">
            <div class="news-list-left">
              <ul
                class="list-header"
                @click="HandleListClick($event)"
              >
                <li
                  v-for="(item,index) in newsTitleList"
                  :data-index="index"
                  :key="index"
                  :class="[index==selectedIndex?'title-active':'']"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="news-list-right">

              <p> <img
                  src="../assets/home/more_left.png"
                  alt=""
                > <span>查看更多</span>
                <img
                  src="../assets/home/more_right.png"
                  alt=""
                >
              </p>
            </div>
          </div>
          <div class="news-title-list">
            <ul>
              <li
                v-for="(item,index) in newsDetailTitleList"
                :key="index"
                :data-index="index"
              >
                <p class="left">
                  <img src="../assets/home/icon_text_title.png" />
                  <span class="message">{{ item }}</span>
                </p>
                <time
                  class="right"
                  datetime=""
                >2023-06-01</time>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="welfare-training">
    <div class="main">
      <div class="welfare-header">
        <div class="welfare-header-title">
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
          <span class="title">公益培训</span>
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
        </div>
        <div class="more">
          <img
            src="../assets/home/more_left.png"
            alt=""
          >
          <span>查看更多</span>
          <img
            src="../assets/home/more_right.png"
            alt=""
          >
        </div>
      </div>
      <div class="welfare-content">
        <div
          class="card"
          v-for="item in 4"
          :key="item"
        >
          <img
            src="../assets/home/image.jpg"
            alt=""
          >
          <article>
            <div class="title">2023年永定区文化馆暑期少儿免费艺术培训</div>
            <ul>
              <li>报名时间：2023.06.01 09:30~17:00</li>
              <li>培训时间：2023.06.10 - 2023.07.30</li>
              <li>培训地点：永定区文化馆</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </div>
  <div class="history">
    <div class="main">
      <div class="left"><img
          src="../assets/home/img_feiyi@2x.png"
          alt=""
        ></div>
      <div class="right">
        <img
          src="../assets/home/img_feiyi.png"
          alt=""
        >
        <div class="btn"></div>
      </div>
    </div>
  </div>
  <div class="culture-branch">
    <div class="main">
      <div class="culture-header">
        <div class="culture-header-title">
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
          <span class="title">文化馆分馆</span>
          <img
            src="../assets/home/icon_title.png"
            alt=""
          >
        </div>
        <div class="more">
          <img
            src="../assets/home/more_left.png"
            alt=""
          >
          <span>查看更多</span>
          <img
            src="../assets/home/more_right.png"
            alt=""
          >
        </div>
      </div>
      <div class="culture-content">
        <div
          class="branch-card"
          v-for="item in 10"
          :key="item"
        >
          <img
            src="../assets/home/culture_branch.png"
            alt=""
          >
          <span class="title">分馆名称</span>
        </div>
      </div>
    </div>
  </div>
  <div class="friendly-link">
    <div class="main">
      <div class="header">
        <img
          src="../assets/home/icon_title.png"
          alt=""
        >
        <span class="title">友情链接</span>
        <img
          src="../assets/home/icon_title.png"
          alt=""
        >
      </div>
      <div class="content">
        <a
          href="https://www.culturedc.cn/web3.0/index.html"
          target="_blank"
        >国家公共文化云</a>
        <a
          href="https://hnggwhy.wentiyun.cn/"
          target="_blank"
        >湖南公共文化云</a>
        <a
          href="https://whhlyt.hunan.gov.cn/"
          target="_blank"
        >湖南省文化和旅游厅</a>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-top">
    </div>
    <div class="footer-center">
      <div class="main">
        <div class="left">
          <p><span>主办单位：永定区文化馆 &nbsp;地址：湖南省张家界市永定区大道区治大院内文化局办公楼4楼</span></p>
          <p>版权所有©张家界市永定区文化馆 湘ICP备18008888号</p>
          <p>技术支持：湖南信息技术有限公司</p>
        </div>
        <div class="right">
          <img
            src="../assets/home/QRcode.png"
            alt=""
          >
          <span>张家界永定区文化馆公众号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const newsTitleList = ref(['通知公告', '工作动态', '文化政策', '基层动态'])
const newsDetailTitleList = ref(['相约美丽四都 畅游山水田园', '开放·融合·创新——永定区“文化馆服务宣传周”系列活动完美收官sdasdasdasds', '永定区积极备赛“百团百角唱新歌”活动', '【新春走基层】“我们的中国梦——文化进万家”活动进景区', '汀汀校服情暖山村学子“校服梦”'])
const selectedIndex = ref(0)
const HandleListClick = (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    const index = target.getAttribute('data-index');
    console.log(index)
    selectedIndex.value = parseInt(index);
  }
}
</script>

<style scoped lang="less">
.back-to-top {
  height: 40px;
  width: 40px;
}
.news-container {
  width: 100%;
  height: 500px;
  background: url("../assets/dongtaibg.png") repeat-y;
  .main {
    width: 75%;
    height: 100%;
  }
  .news-header {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 25px;
      width: 25px;
    }
    .title {
      margin: 0 15px;
      font-family: "Source Han Serif CN";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 38px;
      letter-spacing: 0.15em;
    }
  }
}
.news-content {
  margin: 0 auto;
  background: #fff;
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  .news-content-img {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .news-list {
    height: 100%;
    width: 60%;
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .news-list-left {
        width: 80%;
        ul.list-header {
          height: 60px;
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: space-around;
          border-bottom: 1px dashed #dcdfe6;
          li {
            cursor: pointer;
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 500;
            height: 100%;
            line-height: 60px;
            text-align: center;
            font-size: 16px;
          }
          li.title-active {
            color: #bd4108;
            border-bottom: 2px solid #bd4108;
          }
        }
      }
      .news-list-right {
        width: 20%;
        p {
          cursor: pointer;
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px dashed #dcdfe6;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          img {
            width: 14px;
          }
        }
      }
    }

    .news-title-list {
      ul {
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li:hover {
          cursor: pointer;
          color: #bd4108;
        }
        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .right {
            padding-right: 10px;
            font-size: 14px;
          }
          .left {
            width: 80%;
            display: flex;
            align-items: center;
            padding-left: 40px;
            img {
              width: 20px;
              height: 20px;
            }
            .message {
              padding-left: 10px;
              width: 90%;
              white-space: nowrap; /* 防止文本换行 */
              overflow: hidden; /* 隐藏超出容器的部分 */
              text-overflow: ellipsis; /* 显示省略号 */
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.welfare-training {
  background: #fff;
  width: 100%;
  height: 523px;
  .main {
    height: 523px;
    width: 75%;
    margin: 0 auto;
    .welfare-header {
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      .welfare-header-title {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
        .title {
          margin: 0 15px;
          font-family: "Source Han Serif CN";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
          text-align: center;
          letter-spacing: 0.15em;
          color: #000000;
        }
      }
      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 14px;
        }
        span {
          cursor: pointer;
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
        }
      }
    }
    .welfare-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .card {
        filter: drop-shadow(4px 4px 20px rgba(189, 65, 8, 0.1));
        background: #ffffff;
        border: 1px solid rgba(189, 65, 8, 0.1);
        width: 20%;
        img {
          width: 100%;
        }
        article {
          padding: 3%;
          width: 100%;
          .title {
            font-family: "PingFang SC";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            /* or 150% */
            color: #000000;
          }
          ul {
            padding-top: 3%;
            li {
              font-family: "PingFang SC";
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              /* or 167% */
              display: flex;
              align-items: center;

              color: #000000;
            }
          }
        }
      }
    }
  }
}
.history {
  width: 100%;
  background: url("../assets/home/BG_feiyi@2x.png");
  height: 520px;
  .main {
    height: 520px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      height: 76%;
      img {
        height: 100%;
      }
    }
    .right {
      height: 76%;
      position: relative;
      img {
        height: 100%;
      }
      .btn {
        cursor: pointer;
        position: absolute;
        background: url("../assets/home/btn_feiyi@2x.png");
        background-size: 100% 100%;
        width: 50%;
        height: 15%;
        z-index: 999;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
      .btn:hover {
        transform: translateX(-50%) scale(1.2);
        transition: all linear 1.2s;
      }
    }
  }
}
.culture-branch {
  background: #fff;
  height: 448px;
  width: 100%;
  .main {
    width: 75%;
    height: 100%;
    margin: 0 auto;
    .culture-header {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .culture-header-title {
        width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
        .title {
          margin: 0 15px;
          font-family: "Source Han Serif CN";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
          text-align: center;
          letter-spacing: 0.15em;
          color: #000000;
        }
      }
      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 14px;
        }
        span {
          cursor: pointer;
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
        }
      }
    }
    .culture-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .branch-card {
        position: relative;
        width: 19%;
        img {
          width: 100%;
          cursor: pointer;
          margin-bottom: 12px;
        }
        img:hover {
          transform: scale(1.1);
          transition: all linear 1.2s;
          z-index: 1000;
        }
        .title {
          padding-left: 4%;
          position: absolute;
          left: 0%;
          right: 0%;
          top: 68.31%;
          bottom: 6.34%;
          color: #fff;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.65) 15.05%,
            rgba(0, 0, 0, 0.2) 100%
          );
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */
          display: flex;
          align-items: center;

          color: #ffffff;
        }
      }
    }
  }
}
.friendly-link {
  background: url(../assets/home/BG_feiyi@2x.png);
  width: 100%;
  height: 220px;
  .main {
    width: 75%;
    height: 100%;
    margin: 0 auto;
    .header {
      // transform: translateX(-4%);
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
      .title {
        padding: 0 15px;
        font-family: "Source Han Serif CN";
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #000000;
      }
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 60px;
      a {
        font-family: "PingFang SC";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
      }
      a:hover {
        color: #bd4108;
      }
    }
  }
}
.footer {
  width: 100%;
  height: 112px;
  .footer-top {
    width: 100%;
    height: 10%;
    background: url("../assets/home/img_label@2x.png");
  }
  .footer-center {
    height: 90%;
    width: 100%;
    background: #f28751;
    .main {
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          color: #ffffff;
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
          width: 46px;
          height: 46px;
        }
        span {
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>