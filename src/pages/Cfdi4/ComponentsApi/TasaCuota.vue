<template>
    <div>
      <v-select :items="itemsTasaCuota" placeholder="Tasa o Cuota" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TasaCuota",
    data: () => ({
      itemsTasaCuota: [],
    }),
    created(){
      this.getApiTasaCuota();
    },
    methods:{
      getApiTasaCuota() {
        axios.get("http://localhost:8090/auth/TasaCuota")
        .then((response) => {
          this.itemsTasaCuota = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  