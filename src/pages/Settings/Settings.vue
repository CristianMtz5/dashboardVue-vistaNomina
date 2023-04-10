<template>
  <v-container class="settings-container" fluid>
    <div>
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Ajustes</h1>
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              >Función</v-btn>
          </template>
        </v-menu> -->
      </v-row>
    </div>
    <v-row>
      <v-col md="8" cols="12">
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-3">
            <p>Editar Perfil</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters class="typography-widget pb-6">
              <v-form>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nombre"
                      placeholder="Nombre(s)*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.apellidos"
                      placeholder="Apellidos*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.compañia"
                      placeholder="Compañia*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.email"
                      placeholder="Correo Electronico*"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.estado"
                      placeholder="Estado*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.ciudad"
                      placeholder="Ciudad*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.codigoPostal"
                      placeholder="Codigo Postal*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.about"
                      name="input-7-1"
                      placeholder="Sobre mí(Opcional)"
                      auto-grow
                    ></v-textarea>
                  </v-col>
                  <v-col md="4">
                    <v-btn color="primary"> Actualizar Perfil </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card>
          <v-img
            class="white--text align-end"
            height="350px"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
          </v-img>
          <v-card-title>Jhon Doe</v-card-title>
          <v-card-text class="text--primary">
            <div>• {{ editedItem.nombre }}, {{ editedItem.apellidos }}</div>
            <div>• {{ editedItem.compañia }}, {{ editedItem.estado }}</div>
            <div>• {{ editedItem.about }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Nomina",
  data: () => ({
    editedItem: [
      {
        nombre: "",
        apellidos: "",
        compañia: "",
        email: "",
        estado: "",
        ciudad: "",
        codigoPostal: "",
        about: "",
      },
    ],
  }),
  created() {
    this.getDataUsuario();
  },
  methods: {
    getDataUsuario: function () {
      let email = localStorage.getItem("email");
      //   this.desserts.length = "";
      axios
        .get("http://localhost:8090/auth/Usuarios/" + email)
        .then((response) => {
          this.editedItem = response.data;
        });
    },
  },
};
</script>

<style scoped>
/* .settings-col {
  height: 100%;
} */
</style>
