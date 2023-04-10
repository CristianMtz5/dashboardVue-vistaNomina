<template>
  <v-app-bar class="main-header" height="64" fixed color="primary" dark>
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon style="font-size: 28px">mdi-menu</v-icon>
      </template>
      <template v-else>
        <v-icon style="font-size: 28px">mdi-arrow-right</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title>Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <Search />
    <div>
      <v-btn style="font-size: 28px" icon class="mr-2" @click="darkMode()">
        <v-icon style="font-size: 28px" color="rgba(255, 255, 255, 0.35)"
          >mdi-theme-light-dark</v-icon>
      </v-btn>
    </div>
    <v-menu min-width="180" offset-y bottom left nudge-bottom="10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-0" icon v-bind="attrs" v-on="on">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">
          John Smith
        </div>
        <div class="subtitle-2 primary--text font-weight-regular px-4">
          Flatlogic.com
        </div>
        <!-- <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in account" :key="i">
            <v-list-item-icon class="mr-4">
              <v-icon :color="item.color" v-text="item.icon"> </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                :color="config.light.textColor"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->
        <div class="d-flex justify-center my-3">
          <v-btn
            width="80%"
            large
            outlined
            color="error"
            class="text-capitalize"
            @click="logOut"
            >Cerrar Sesión
          </v-btn>
        </div>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import config from "../../config";
import Search from "@/components/Search/Search";

export default {
  name: "Header",
  components: { Search },
  data: () => ({
    config,
    searchCollapse: true,
    account: [
      /* { text: "Profile", icon: "mdi-account", color: "textColor" },
      { text: "Tasks", icon: "mdi-thumb-up", color: "textColor" },
      { text: "Messages", icon: "mdi-flag", color: "textColor" }, */
    ],
    notificationsBadge: true,
    messageBadge: true,
  }),
  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      },
    },
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
    logOut: function () {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    darkMode(){
      
    }
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
