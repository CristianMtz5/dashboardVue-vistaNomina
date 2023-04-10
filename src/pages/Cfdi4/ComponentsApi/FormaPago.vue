<template>
    <div>
      <v-select :items="itemsFormaPago" placeholder="Forma de Pago" item-text="descripcion" dense outlined></v-select>
    </div>
  </template>

  <script>
  import axios from "axios";
  
  export default {
    name: "FormaPago",
    data: () => ({
      itemsFormaPago: [],
    }),
    created(){
      this.getApiFormaPago();
    },
    methods:{
      getApiFormaPago() {
        axios.get("http://localhost:8090/auth/FormaPago")
        .then((response) => {
          this.itemsFormaPago = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  