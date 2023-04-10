<template>
  <div>
    <v-select
      :items="itemsOriRec"
      placeholder="Origen, Recurso"
      item-text="id"
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrigenRecurso",
  data: () => ({
    itemsOriRec: [],
  }),
  created() {
    this.getApiOrigenRecurso();
  },
  methods: {
    getApiOrigenRecurso() {
      axios.get("http://localhost:8090/auth/OrigenRecurso").then((response) => {
        this.itemsOriRec = response.data;
      });
    },
  },
};
</script>

<style scoped></style>
