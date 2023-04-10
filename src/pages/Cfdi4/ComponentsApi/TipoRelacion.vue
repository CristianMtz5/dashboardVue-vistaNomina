<template>
  <div>
    <v-select
      :items="itemsTipoRelacion"
      placeholder="Tipo de Relación"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoRelacion",
  data: () => ({
    itemsTipoRelacion: [],
  }),
  created() {
    this.getApiTipoRelacion();
  },
  methods: {
    getApiTipoRelacion() {
      axios.get("http://localhost:8090/auth/TipoRelacion").then((response) => {
        this.itemsTipoRelacion = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
