<template>
  <div>
    <v-select
      :items="itemsTipoContrato"
      placeholder="Tipo de Contrato"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoContrato",
  data: () => ({
    itemsTipoContrato: [],
  }),
  created() {
    this.getApiTipoContrato();
  },
  methods: {
    getApiTipoContrato() {
      axios.get("http://localhost:8090/auth/TipoContrato").then((response) => {
        this.itemsTipoContrato = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
