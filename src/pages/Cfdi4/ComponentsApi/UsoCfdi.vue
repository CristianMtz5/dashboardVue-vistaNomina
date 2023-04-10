<template>
    <div>
      <v-select :items="itemsUsoCfdi" placeholder="Uso CFDI" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "UsoCfdi",
    data: () => ({
      itemsUsoCfdi: [],
    }),
    created(){
      this.getApiUsoCfdi();
    },
    methods:{
      getApiUsoCfdi() {
        axios.get("http://localhost:8090/auth/UsoCfdi")
        .then((response) => {
          this.itemsUsoCfdi = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  