<template>
    <q-page class="q-pa-md">
      <q-toolbar class="bg-primary text-white q-mb-md">
        <q-toolbar-title>Dashboard de Facturación</q-toolbar-title>
      </q-toolbar>
  
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Resumen de Facturación</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row q-gutter-md">
          <q-card class="col-12 col-md-4 bg-blue-2">
            <q-card-section>
              <div class="text-subtitle1">Total Facturado</div>
              <div class="text-h6 text-primary">$12,500.00</div>
            </q-card-section>
          </q-card>
          <q-card class="col-12 col-md-4 bg-green-2">
            <q-card-section>
              <div class="text-subtitle1">Facturas Pagadas</div>
              <div class="text-h6 text-green">$8,750.00</div>
            </q-card-section>
          </q-card>
          <q-card class="col-12 col-md-4 bg-red-2">
            <q-card-section>
              <div class="text-subtitle1">Pendientes de Pago</div>
              <div class="text-h6 text-red">$3,750.00</div>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
  
      <q-card>
        <q-card-section>
          <div class="text-h6">Accesos Rápidos</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row q-gutter-md">
          <q-btn label="Crear Factura" icon="receipt" color="primary" class="col-12 col-md-3" />
          <q-btn label="Ver Reportes" icon="bar_chart" color="secondary" class="col-12 col-md-3" />
          <q-btn label="Clientes" icon="people" color="accent" class="col-12 col-md-3" />
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup>
  </script>
  