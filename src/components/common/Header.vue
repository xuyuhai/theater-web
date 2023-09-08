<template>
  <div>
    <router-view>
      <div class="top-container">
        <div class="top-content main">
          <img
            src="../../assets/logo.png"
            alt=""
          >

          <el-input
            class="search-input"
            v-model="input2"
            placeholder="请输入关键词搜索"
            size="small"
          >
            <template #suffix>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.53 20.47L17.689 16.629C18.973 15.106 19.75 13.143 19.75 11C19.75 6.175 15.825 2.25 11 2.25C6.175 2.25 2.25 6.175 2.25 11C2.25 15.825 6.175 19.75 11 19.75C13.143 19.75 15.106 18.973 16.629 17.689L20.47 21.53C20.616 21.676 20.808 21.75 21 21.75C21.192 21.75 21.384 21.677 21.53 21.53C21.823 21.238 21.823 20.763 21.53 20.47ZM3.75 11C3.75 7.002 7.002 3.75 11 3.75C14.998 3.75 18.25 7.002 18.25 11C18.25 14.998 14.998 18.25 11 18.25C7.002 18.25 3.75 14.998 3.75 11Z"
                  fill="#25314C"
                />
              </svg>

            </template>
          </el-input>
        </div>
      </div>
      <div class="menu-container">
        <div class="menu main">
          <el-menu
            router="true"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#fff"
            text-color="#fff"
            @select="handleSelect"
          >
            <el-menu-item
              index="1"
              route="/"
            >首页</el-menu-item>
            <el-sub-menu
              index="2"
              class="sub_menu"
              popper-offset="0"
              expand-close-icon="none"
              expand-open-icon="none"
              collapse-close-icon="none"
              collapse-open-icon="none"
            >
              <template #title>馆政公开</template>
              <template #expand-close-icon>
                <span></span>
              </template>
              <el-menu-item
                index="2-1"
                route="/notify"
              >通知公告</el-menu-item>
              <el-menu-item index="2-2">工作动态</el-menu-item>
              <el-menu-item index="2-3">文化政策</el-menu-item>
              <el-menu-item index="2-4">基层动态</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">资讯动态</el-menu-item>
            <el-menu-item index="4">文化活动</el-menu-item>
            <el-menu-item index="5">基层场馆</el-menu-item>
            <el-menu-item index="6">公益培训</el-menu-item>
            <el-menu-item index="7">数字资源</el-menu-item>
            <el-menu-item index="8">数字展厅</el-menu-item>
            <el-menu-item index="9">非遗中心</el-menu-item>
            <el-menu-item index="10">志愿者</el-menu-item>
          </el-menu>
        </div>
      </div>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from "vue"
const input2 = ref('')
</script>

<style lang="less">
.main {
  width: 80%;
  margin: 0 auto;
}
.top-container {
  width: 100%;
  background: #fff;
  height: 76px;
  .top-content {
    height: 100%;
    width: 73%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-input {
    width: 240px;
    height: 40px;
  }
}
.menu-container {
  width: 100%;
  background: url(../../assets/menu_bg.png) repeat;
  .menu {
    background-size: cover;
    font-size: 16px;
    color: #fff;
    .el-menu-item {
      width: 8% !important;
    }
    .sub_menu {
      width: 8%;
    }
  }
}
</style>