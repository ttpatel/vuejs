<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-dialog>
    <template v-slot:activator="{ props }">
      <v-btn color="indigo" v-bind="props"> Add new project </v-btn>
    </template>
    <v-card class="dialogWidth">
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            prepend-icon="mdi-folder"
            v-model="title"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="person"
            v-model="person"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="due date"
            v-model="due "
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="status"
            v-model="status"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-text-field>

          <!-- <v-menu>
            <template v-slot:activator="{ props }">
              <v-text-field
                label="Due date"
                prepend-icon="mdi-pencil"
                v-bind="props"
                :value="due"
                v-model="due"
                :rules="inputRules"
              >
              </v-text-field>
            </template>
          </v-menu> -->

          <v-btn flat color="success mx-0 mt-3" @click="addPost"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import app from '@/fb.js';
export default {
  data() {
    return {
      title: "",
      person: "",
      due: "",
      status: "",
      // due: null,
      inputRules: [(v) => v.length >= 3 || "Minimun length is 3 characters"],
    };
  },
  // methods: {
  //   submit() {
  //     if (this.$refs.form.validate()) {
  //       console.log(this.title, this.content, this.due);
  //       const project = {
  //           title:this.title,
  //           content:this.content,
  //           due:this.due,
  //           person:"TT Patel",
  //           status:'ongoing'
  //       }
  //       app.collection.update('projects').add(project).then(()=>{
  //           console.log('added to app')
  //       })
  //     }
  //   },
  // },
  methods: {
    addPost() {
      fetch(
        "https://todo-d5633-default-rtdb.asia-southeast1.firebasedatabase.app/test.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            person: this.person,
            due: this.due,
            status: this.status,
          }),
        }
      );
      this.$router.push("/");
    },
  },
};
</script>

<style>
.dialogWidth {
  width: 600px !important;
}
</style>