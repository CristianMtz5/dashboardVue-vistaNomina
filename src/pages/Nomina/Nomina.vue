<template>
  <v-container fluid>
    <div>
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Catálogos Nómina</h1>
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
    <v-form class="form-nomina">
      <v-row>
        <v-col cols="12" sm="3">
          <Banco />
        </v-col>
        <v-col cols="12" sm="3">
          <OrigenRecurso />
        </v-col>
        <v-col cols="12" sm="3">
          <PeriodicidadPago />
        </v-col>
        <v-col cols="12" sm="3">
          <RiesgoPuesto />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <TipoContrato />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoDeduccion />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoHoras />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoIncapacidad />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <TipoJornada />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoNomina />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoOtroPago />
        </v-col>
        <v-col cols="12" sm="3">
          <TipoPercepcion />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <TipoPercepcion />
        </v-col>
        <v-col align="right"> </v-col>
      </v-row>
      <v-col align="right">
        <v-btn color="primary"> Algo tiene que hacer </v-btn>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
import Banco from "@/pages/Nomina/ComponentsApi/Banco.vue";
import OrigenRecurso from "./ComponentsApi/OrigenRecurso.vue";
import PeriodicidadPago from "./ComponentsApi/PeriodicidadPago.vue";
import RiesgoPuesto from "./ComponentsApi/RiesgoPuesto.vue";
import TipoContrato from "./ComponentsApi/TipoContrato.vue";
import TipoDeduccion from "./ComponentsApi/TipoDeduccion.vue";
import TipoIncapacidad from "./ComponentsApi/TipoIncapacidad.vue";
import TipoHoras from "./ComponentsApi/TipoHoras.vue";
import TipoJornada from "./ComponentsApi/TipoJornada.vue";
import TipoNomina from "./ComponentsApi/TipoNomina.vue";
import TipoOtroPago from "./ComponentsApi/TipoOtroPago.vue";
import TipoPercepcion from "./ComponentsApi/TipoPercepcion.vue";

export default {
  name: "Nomina",
  components: {
    Banco,
    OrigenRecurso,
    PeriodicidadPago,
    RiesgoPuesto,
    TipoContrato,
    TipoDeduccion,
    TipoIncapacidad,
    TipoHoras,
    TipoJornada,
    TipoNomina,
    TipoOtroPago,
    TipoPercepcion,
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
