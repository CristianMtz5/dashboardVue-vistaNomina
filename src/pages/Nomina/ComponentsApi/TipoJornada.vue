<template>
  <div>
    <v-select
      :items="itemsTipoJornada"
      placeholder="Tipo de Jornada"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoJornada",
  data: () => ({
    itemsTipoJornada: [],
  }),
  created() {
    this.getApiTipoJornada();
  },
  methods: {
    getApiTipoJornada() {
      axios
        .get("http://localhost:8090/auth/TipoJornada")
        .then((response) => {
          this.itemsTipoJornada = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
