<template>
    <div>
      <v-select :items="itemsRegimenFiscal" placeholder="Regimen Fiscal" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Regimen Fiscal",
    data: () => ({
      itemsRegimenFiscal: [],
    }),
    created(){
      this.getApiRegimenFiscal();
    },
    methods:{
      getApiRegimenFiscal() {
        axios.get("http://localhost:8090/auth/Regimen Fiscal")
        .then((response) => {
          this.itemsRegimenFiscal = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  