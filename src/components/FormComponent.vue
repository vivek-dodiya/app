<template>
<main class="flex h-screen items-center justify-center bg-zinc-900 ">
    <form action="" class="px-20 py-20 w-96 text-white bg-zinc-700">
        <h1 class="text-3xl flex item-center justify-center">
            Form
        </h1>
        <label for="">Email :- </label>
        <input type="email" placeholder="Enter Email" v-model="form.email" class="bg-zinc-600 hover:bg-zinc-800 rounded-md ">
        <br>
        <br>
        <label for="">Password :- </label>
        <input type="password" placeholder="Enter Password" v-model="form.password" class="bg-zinc-600 hover:bg-zinc-800 rounded-md">
        <br>
        <button type="button" v-on:click="login()" class="bg-blue-900 mt-3 px-5 py-1 rounded-full text-white hover:bg-blue-500">
            Login
        </button>
    </form>
</main>
</template>

<script>
 import {
     useDataStore
 } from '../stores/userData'
 import {
     storeToRefs
 } from 'pinia';
 import {
     useRouter
 } from 'vue-router';
 export default {
     name: 'FormComponent',
     setup() {
         const dataStore = useDataStore()
         const {
             form,
             error
         } = storeToRefs(dataStore)
         const router = useRouter()
         return {
             form,
             error,
             Login: dataStore.login,
             router
         }
     },
     methods: {
         login() {
             if (this.form.email === '' || this.form.password === '') {
                 alert("all field are mendetory ");
                 return
             }
             if (this.Login) {
                 this.router.push('/dashboard');
             }
         }
     }
 }
</script>

<style>
form {
    border: 1px solid white;
    width: 400px;
    padding: 15px;
}
</style>
