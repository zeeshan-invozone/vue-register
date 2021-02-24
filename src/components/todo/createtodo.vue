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
            <v-list-item v-for="todo in allTodos" :key="todo.id">
              <div>
                <span class="text-uppercase bold mr-5">{{ todo.name }}</span>
                <span class="subheading mr-5">{{ todo.subject }}</span>
              </div>
              <v-spacer></v-spacer>
              <v-icon @click.prevent="deleteSubject(todo.id)">mdi-close</v-icon>
            </v-list-item>
          </v-list>
        </div>
        <div v-else class="text-md-caption">todo not found yet ..</div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
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
    ...mapActions(['addTodo'], ['deleteTodo']),
    createNewTodo() {
      this.isadd = true;
      const randomId = Math.floor(Math.random() * 100 + 1);
      this.addTodo({ id: randomId, name: this.name, subject: this.subject });
    },
    deleteSubject(todoId) {
      this.$store.dispatch('deleteTodo', todoId);
    },
  },
  computed: mapGetters(['allTodos']),
};
</script>
<style scoped></style>>
