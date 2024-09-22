import { defineStore } from "pinia";
import { ref  } from 'vue';
export  const useDataStore = defineStore ('userdata',()=>{
    const form = ref({
        email: '',
        password : ''
    });
    const error = ref([]);
    function login (){
        for(let item in form.value){
            if(form.value[item] === ''){
                error.value.push(`${item} are mendetory`);
            }
            if(error.value.length === 0){
                return true
            }
        }
        return false
    }
    return {form , error, login}
})