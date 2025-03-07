<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2 rounded-borders" style="width: 400px; max-width: 90vw;">
      <q-card-section class="text-center">
        <q-avatar size="80px" class="bg-primary text-white">
          <q-icon name="person" size="50px" />
        </q-avatar>
        <div class="text-h5 q-mt-md">Iniciar Sesión</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleLogin">
          <q-input v-model="email" label="Correo" type="email" filled lazy-rules class="q-mb-md"
            :rules="[val => !!val || 'El correo es obligatorio']" />

          <q-input v-model="password" label="Contraseña" type="password" filled lazy-rules class="q-mb-md"
            :rules="[val => !!val || 'La contraseña es obligatoria']" />

          <q-btn label="Ingresar" type="submit" color="primary" class="full-width" :loading="loading" @click="login()" />
        </q-form>
      </q-card-section>

      <q-card-section v-if="error" class="text-negative text-center">
        <q-icon name="warning" class="q-mr-xs" /> {{ error }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { QIcon, QAvatar, QCardSection, QInput, QBtn, QForm, QCard, QPage,} from 'quasar';
import { useAuthStore } from '../Store/useAuth';
import { postData } from '../Services/apiClient.js';
import { useRoute } from 'vue-router';
import axios from 'axios';
const handleLogin = () => {
    console.log('Intentando iniciar sesión...');
    // Lógica de autenticación aquí
};

const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const authStore = useAuthStore();
const router = useRoute();

async function login (){
       try {
           const response = await postData("/oauth/token",{
               grant_type:"password",
               client_id:import.meta.env.VITE_CLIENT_ID,
               client_secret:import.meta.env.VITE_CLIENT_SECRET,
               username:email.value,
               password:password.value
           })
   
           const token= response.access_token
           if(token){
               //tienda
               store.set_Token_RefreshToken(response.access_token, response.refresh_token)
               router.replace("/home")
           }
           else{
               console.log("algo salio mal" , response);
           }
   
       } catch (error) {
           console.log(error);
       }
   }
</script>

<style scoped>
.shadow-2 {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.rounded-borders {
  border-radius: 12px;
}
</style>
