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
    <button type="button" v-on:click="Login()">
        Login
    </button>
</form>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            error: []
        }
    },
    methods: {
        Login() {
            for (let item in this.form) {
                if (this.form[item] == '') {
                    return alert("all fild mendetory")
                }
            }
            this.$router.push('/dashboard');
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
