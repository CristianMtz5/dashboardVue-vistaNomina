<template>
    <div>
      <v-select :items="itemsTipoComprobante" placeholder="Tipo de Comprobante" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TipoComprobante",
    data: () => ({
      itemsTipoComprobante: [],
    }),
    created(){
      this.getApiTipoComprobante();
    },
    methods:{
      getApiTipoComprobante() {
        axios.get("http://localhost:8090/auth/TipoComprobante")
        .then((response) => {
          this.itemsTipoComprobante = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  