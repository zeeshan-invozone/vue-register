<template>
  <nav>
    <v-toolbar dark dense>
      <v-app-bar-nav-icon
        class="gray--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="gray mr-3 text-uppercase" @click="addtodo">
        <v-icon left>mdi-plus</v-icon>
        Add todo
      </v-btn>
      <v-btn text class="gray"
        >Sign Out
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="black lighten-4">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item>
            <v-list-item-action>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text pl-4">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
    };
  },
  methods: {
    addtodo() {
      this.$router.push('/add-new');
    },
  },
};
</script>
