<template>
    <div>
      <v-select :items="itemsNumPedAduana" placeholder="No. de Pedido Aduanal" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "Aduana",
    data: () => ({
      itemsNumPedAduana: [],
    }),
    created(){
      this.getApiNumPedAduana();
    },
    methods:{
      getApiNumPedAduana() {
        axios.get("http://localhost:8090/auth/NumPedAduana")
        .then((response) => {
          this.itemsNumPedAduana = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  