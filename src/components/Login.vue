<template>
  <v-row justify="center">
    <v-col sm="8" md="4">
      <v-card ref="form">
        <h2 class="login">Login</h2>
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'Email is required']"
            label="Email"
            type="email"
            required
          >
          </v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="[() => !!password || 'password is required']"
            label="Password"
            type="password"
            required
          >
          </v-text-field>
        </v-card-text>
        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import firebase from '../firebase/firebase.config';
export default {
  data: () => ({
    errorMessages: '',
    password: null,
    email: null,
    formHasErrors: false,
    islogin: false,
  }),

  computed: {
    form() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = '';
    },
  },

  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    async submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        const cu = firebase.auth().currentUser;
        if (cu) {
          console.log('sign in successfully');
          this.islogin = true;
          this.$router.push('/');
          return cu;
        }
      } catch (error) {
        console.log(error.message);
        return error.message;
      }
    },
  },
};
</script>
<style scoped>
.login {
  text-align: center;
}
</style>
