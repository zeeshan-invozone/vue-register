<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="20"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="60"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>

      <h4 class="mr-2 logout" @click="logout">Logout</h4>
    </v-app-bar>

    <v-main>
      <router-view class="main-app"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from './firebase/firebase.config';
export default {
  name: 'App',
  methods: {
    async logout() {
      console.log('User logout successfully');
      await firebase.auth().signOut();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.logout {
  cursor: pointer;
}
</style>
