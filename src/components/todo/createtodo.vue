<template>
  <v-row justify="center" class="mt-5">
    <v-col sm="6" md="3">
      <v-card class="px-5 py-5">
        <div class="font-weight-medium">Add Todo</div>
        <v-divider></v-divider>
        <div>
          <v-text-field placeholder="Name" v-model="name" />
          <v-text-field placeholder="Subject" v-model="subject" />
          <v-btn class="text-uppercase gray--text" @click="createNewTodo"
            >Add</v-btn
          >
        </div>
      </v-card>
    </v-col>

    <v-col sm="6" md="4">
      <v-card class="px-5 py-5">
        <div class="font-weight-medium">Todo List</div>
        <v-divider></v-divider>
        <div v-if="isadd">
          <v-list>
            <v-list-item v-for="todo in todolist" :key="todo.name">
              <div>
                <span class="text-uppercase bold mr-5">{{ todo.name }}</span>
                <span class="subheading mr-5">{{ todo.subject }}</span>
              </div>
              <v-spacer></v-spacer>
              <v-icon @click="handleDel">mdi-close</v-icon>
            </v-list-item>
          </v-list>
        </div>
        <div v-else class="text-md-caption">todo not found yet ..</div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      subject: null,
      todolist: [],
      isadd: false,
    };
  },
  methods: {
    createNewTodo() {
      this.todolist.push({ name: this.name, subject: this.subject });
      this.isadd = true;
    },
    handleDel() {
      console.log('del');
    },
  },
};
</script>
<style scoped></style>>
