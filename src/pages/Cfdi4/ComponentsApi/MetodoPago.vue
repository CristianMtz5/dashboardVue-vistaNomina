<template>
    <div>
      <v-select :items="itemsMetodoPago" placeholder="Metodo de Pago" item-text="descripcion" dense outlined></v-select>
    </div>
</template>

  <script>
  import axios from "axios";
  
  export default {
    name: "MetodoPago",
    data: () => ({
      itemsMetodoPago: [],
    }),
    created(){
      this.getApiMetodoPago();
    },
    methods:{
      getApiMetodoPago() {
        axios.get("http://localhost:8090/auth/MetodoPago")
        .then((response) => {
          this.itemsMetodoPago = response.data;
        });
      },
    }
  };
  </script>
  
  <style scoped></style>
  