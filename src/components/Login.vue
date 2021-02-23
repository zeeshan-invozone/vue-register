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
      let uri = 'http://localhost:5000/user/login';
      const response = await this.axios.post(uri, {
        email: this.email,
        password: this.password,
      });
      console.log('login res', response);
    },
  },
};
</script>
<style scoped>
.login {
  text-align: center;
}
</style>
