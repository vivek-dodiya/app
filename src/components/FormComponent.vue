<template>
<h1>
    Form
</h1>
<form action="">
    <label for="">Email </label>
    <input type="email" placeholder="Enter Email" v-model="form.email">
    <br>
    <br>
    <label for="">Password </label>
    <input type="password" placeholder="Enter Password" v-model="form.password">
    <br>
    <button type="button" v-on:click="login()">
        Login
    </button>
</form>
</template>

<script> 
import{useDataStore} from '../stores/userData'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
    name: 'FormComponent',
    setup(){
        const dataStore = useDataStore()
        const {form , error } = storeToRefs(dataStore)
        const router = useRouter()
        return {
            form,
            error,
            Login : dataStore.login,
            router
        }
    },
    methods: {
        login() {
            if (this.Login) {
                this.router.push('/dashboard');
            }
        }
    }
}
</script>

<style>
form {
    border: 1px solid black;
    width: 400px;
    padding: 15px;
}
</style>
