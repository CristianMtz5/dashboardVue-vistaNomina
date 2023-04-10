<template>
  <div>
    <v-select
      :items="itemsTipoDeduccion"
      placeholder="Tipo de Deducción"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoDeduccion",
  data: () => ({
    itemsTipoDeduccion: [],
  }),
  created() {
    this.getApiTipoDeduccion();
  },
  methods: {
    getApiTipoDeduccion() {
      axios.get("http://localhost:8090/auth/TipoDeduccion").then((response) => {
        this.itemsTipoDeduccion = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
