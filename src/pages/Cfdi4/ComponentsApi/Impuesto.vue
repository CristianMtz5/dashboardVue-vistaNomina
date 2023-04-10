<template>
    <div>
      <v-select :items="itemsImpuesto" placeholder="Impuesto" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Impuesto",
    data: () => ({
      itemsImpuesto: [],
    }),
    created(){
      this.getApiImpuesto();
    },
    methods:{
      getApiImpuesto() {
        axios.get("http://localhost:8090/auth/Impuesto")
        .then((response) => {
          this.itemsImpuesto = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  