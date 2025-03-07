import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore ("store",()=>{
  const token = ref("");
  const refreshToken = ref("");

    function set_Token_RefreshToken (Token, RefreshToken){
      if (token){
        token.value = Token
        refreshToken.value = RefreshToken
      }
      else{
        console.log("no-token no-refreshToken");
      }
    }

    return{
      token,
      refreshToken,
      set_Token_RefreshToken
    }

}, {
  persist: true
})