<template>
  <div>
    <v-select
      :items="itemsRegimen"
      placeholder="Tipo de Regimen"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoRegimen",
  data: () => ({
    itemsRegimen: [],
  }),
  created() {
    this.getApiTipoRegimen();
  },
  methods: {
    getApiTipoRegimen() {
      axios
        .get("http://localhost:8090/auth/TipoRegimen")
        .then((response) => {
          this.itemsRegimen = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
