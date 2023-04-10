<template>
  <div>
    <v-select
      :items="itemsRiesgoPuesto"
      placeholder="Riesgo o Puesto"
      item-text="descripcion"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RiesgoPuesto",
  data: () => ({
    itemsRiesgoPuesto: [],
  }),
  created() {
    this.getRiesgoPuesto();
  },
  methods: {
    getRiesgoPuesto() {
      axios.get("http://localhost:8090/auth/RiesgoPuesto").then((response) => {
        this.itemsRiesgoPuesto = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
