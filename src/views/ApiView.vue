<template>
  <div>
    <button @click="getData">Get Data</button>
    <div>{{ testApi.message }}</div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";

type test = {
  message: string;
  path: string;
};

const testApi: test = reactive({
  message: "",
  path: "",
});

async function getData() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api");
    testApi.message = response.data.message;
    testApi.path = response.data.path;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
</script>
