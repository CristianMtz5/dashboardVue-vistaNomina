<template>
  <div>
    <v-select
      :items="itemsTipoOtroPago"
      placeholder="Tipo de Pago"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TipoOtroPago",
  data: () => ({
    itemsTipoOtroPago: [],
  }),
  created() {
    this.getApiTipoOtroPago();
  },
  methods: {
    getApiTipoOtroPago() {
      axios
        .get("http://localhost:8090/auth/TipoOtroPago")
        .then((response) => {
          this.itemsTipoOtroPago = response.data;
        });
    },
  },
};
</script>

<style scoped></style>
