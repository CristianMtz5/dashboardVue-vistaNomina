<template>
  <div>
    <v-select
      :items="itemsTipoPercepcion"
      placeholder="Tipo de Percepción"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoPercepcion",
  data: () => ({
    itemsTipoPercepcion: [],
  }),
  created() {
    this.getApiTipoPercepcion();
  },
  methods: {
    getApiTipoPercepcion() {
      axios
        .get("http://localhost:8090/auth/TipoPercepcion")
        .then((response) => {
          this.itemsTipoPercepcion = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
