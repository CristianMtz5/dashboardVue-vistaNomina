<template>
    <div>
      <v-select :items="itemsObjetoImp" placeholder="Objeto Impuesto" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "ObjetoImp",
    data: () => ({
      itemsObjetoImp: [],
    }),
    created(){
      this.getApiObjetoImpuesto();
    },
    methods:{
      getApiObjetoImpuesto() {
        axios.get("http://localhost:8090/auth/ObjetoImp")
        .then((response) => {
          this.itemsObjetoImp = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  