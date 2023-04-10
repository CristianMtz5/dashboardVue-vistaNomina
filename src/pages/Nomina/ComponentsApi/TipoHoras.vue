<template>
  <div>
    <v-select
      :items="itemsTipoHoras"
      placeholder="Tipo de Horas"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoHoras",
  data: () => ({
    itemsTipoHoras: [],
  }),
  created() {
    this.getApiTipoHoras();
  },
  methods: {
    getApiTipoHoras() {
      axios.get("http://localhost:8090/auth/TipoHoras").then((response) => {
        this.itemsTipoHoras = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
