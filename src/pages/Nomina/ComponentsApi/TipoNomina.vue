<template>
  <div>
    <v-select
      :items="itemsTipoNomina"
      placeholder="Tipo de Nomina"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoNomina",
  data: () => ({
    itemsTipoNomina: [],
  }),
  created() {
    this.getApiTipoNomina();
  },
  methods: {
    getApiTipoNomina() {
      axios
        .get("http://localhost:8090/auth/TipoNomina")
        .then((response) => {
          this.itemsTipoNomina = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
