<template>
    <q-page class="flex flex-center column">
      <div class="text-h5">Bienvenido, {{ authStore.user?.name }}</div>
      <q-btn label="Cerrar Sesión" color="negative" @click="logout" class="q-mt-md" />
    </q-page>
  </template>
  
  <script setup>
  import { QBtn, QPage } from 'quasar';
  import { useAuthStore } from '../Store/useAuth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const logout = () => {
    authStore.logout();
    router.push('/login');
  };
  </script>
  