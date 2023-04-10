<template>
  <v-container fluid>
    <div>
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Catálogos CFDI 4.0</h1>
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              >Función</v-btn>
          </template>
        </v-menu> -->
      </v-row>
    </div>
    <v-form class="form-cfdi4">
      <v-row>
        <v-col cols="12" sm="3">
          <Aduana />
        </v-col>
        <v-col cols="12" sm="3">
          <Asentamientos />
        </v-col>
        <v-col cols="12" sm="3">
          <ClaveProdServ />
        </v-col>
        <v-col cols="12" sm="3">
          <ClaveUnidad />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <CodigoPostal />
        </v-col>
        <v-col cols="12" sm="3">
          <Estado />
        </v-col>
        <v-col cols="12" sm="3">
          <Exportacion />
        </v-col>
        <v-col cols="12" sm="3">
          <FormaPago />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <Impuesto />
        </v-col>
        <v-col cols="12" sm="3">
          <Localidad />
        </v-col>
        <v-col cols="12" sm="3">
          <Meses />
        </v-col>
        <v-col cols="12" sm="3">
          <MetodoPago />
        </v-col>
      </v-row>
      <v-col align="right">
        <v-btn color="primary"> Algo tiene que hacer </v-btn>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
import Aduana from "./ComponentsApi/Aduana.vue";
import Asentamientos from "./ComponentsApi/Asentamientos.vue";
import ClaveProdServ from "./ComponentsApi/ClaveProdServ.vue";
import ClaveUnidad from "./ComponentsApi/ClaveUnidad.vue";
import CodigoPostal from "./ComponentsApi/CodigoPostal.vue";
import Estado from "./ComponentsApi/Estado.vue";
import Exportacion from "./ComponentsApi/Exportacion.vue";
import FormaPago from "./ComponentsApi/FormaPago.vue";
import Impuesto from "./ComponentsApi/Impuesto.vue";
import Localidad from "./ComponentsApi/Localidad.vue";
import Meses from "./ComponentsApi/Meses.vue";
import MetodoPago from "./ComponentsApi/MetodoPago.vue";

export default {
  name: "Cfdi4",
  components: {
    Aduana,
    Asentamientos,
    ClaveProdServ,
    ClaveUnidad,
    CodigoPostal,
    Estado,
    Exportacion,
    FormaPago,
    Impuesto,
    Localidad,
    Meses,
    MetodoPago,
  },
  data: () => ({
    items: [],
  }),
};
</script>

<style scoped>
.form-nomina {
  background-color: #fff;
  padding: 40px 25px 30px 25px;
  border-radius: 8px;
}
</style>
