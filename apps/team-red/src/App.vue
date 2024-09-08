<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProductPage from './components/ProductPage.vue'
import { ElButton } from 'element-plus'

</script>

<template>
  <el-container class="container">
    <el-aside class="aside">
      <div class="head">
        <div>
          <img src="https://avatars.githubusercontent.com/u/81556572?s=200&v=4" alt="logo">
          <span>vite-plugin-federation</span>
        </div>
      </div>

      <el-menu router>
        <el-menu-item-group>
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/store">Store</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-container class="content">
        <RouterView />
    </el-container>
  </el-container>

</template>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}

.container {
  height: 100vh;
}

.aside {
  width: 200px !important;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.aside::-webkit-scrollbar {
  display: none;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.head span {
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
  padding: 20px;
}
</style>
