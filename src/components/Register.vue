<template>
  <v-row justify="center">
    <v-col sm="8" md="4">
      <v-card ref="form">
        <h2 class="register">Register</h2>
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
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
          <v-text-field
            ref="address"
            v-model="address"
            :rules="[
              () => !!address || 'This field is required',
              () =>
                (!!address && address.length <= 25) ||
                'Address must be less than 25 characters',
              addressCheck,
            ]"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">
            Submit
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
    name: null,
    address: null,
    password: null,
    email: null,
    formHasErrors: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
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
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : '';

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    async submit() {
      console.log('submit');
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });

      let uri = 'http://localhost:5000/user/register';
      const result = await this.axios.post(uri, {
        name: this.name,
        address: this.address,
        email: this.email,
        password: this.password,
      });
      console.log('result', result);
    },
  },
};
</script>

<style scoped>
.register {
  text-align: center;
}
</style>
