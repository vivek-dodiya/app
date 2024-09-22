<template>
<h1>Welcome to DeshBoard</h1>
<div class="center">
    <img src="../assets/JPG_04.jpg" alt="">
</div>
<div v-if="data">
   <ul>
    <li v-for="item in data" :key="item">{{ item }}</li>>
   </ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'DashBoard',
    data() {
        return {
            data: null
        }
    },
    async mounted() {
        try {
            const result = await axios.get('https://dog.ceo/api/breeds/list/all');
            this.data = result.data.message.terrier
        } catch (error) {
            console.log('error', error)
        }

    }
}
</script>

<style scoped>
h1 {
    color: blue;
    text-align: center;
}

.center {
    text-align: center;
}

img {
    width: 50%;
    height: 500px;
}
</style>