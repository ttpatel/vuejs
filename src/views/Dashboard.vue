<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard">
    <h1 class="text-info justify-center d-flex mt-3">Dashboard</h1>
    <v-container fluid class="my-5">
      <v-row class="mb-3 mx-3">
        <v-btn variant="small" flat color="grey" @click="sortBy('title')">
          <v-tooltip activator="parent" location="top">
            <span style="font-size:10px;">Sort by project name</span>
            </v-tooltip>
          <v-icon left smal>mdi-folder</v-icon>
          <span class="caption text-lowercase mx-2">By project name</span>
        </v-btn>
        <v-btn variant="small" flat color="grey" @click="sortBy('person')">
           <v-tooltip activator="parent" location="top">
            <span style="font-size:10px;">Sort by person</span>
            </v-tooltip>
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase mx-2">By person</span>
        </v-btn>
        <v-btn variant="small" flat color="grey" @click="sortBy('status')">
           <v-tooltip activator="parent" location="top">
            <span style="font-size:10px;">Sort by status </span>
            </v-tooltip>
          <v-icon left small>mdi-history</v-icon>
          <span class="caption text-lowercase mx-2">By status</span>
        </v-btn>
        <!-- <v-btn variant="small" flat color="grey" @click="addGET">
           <v-tooltip activator="parent" location="top">
            <span style="font-size:10px;">Update</span>
            </v-tooltip>
          <v-icon left small>mdi-history</v-icon>
          <span class="caption text-lowercase mx-2">Updte Table</span>
        </v-btn> -->
      </v-row>
      <v-card
        flat
        class="pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-row wrap :class="`pa-3   project ${project.status}`">
          <v-col cols="12" xs="12" sm="4" md="6">
            <div class="text-grey text-caption font-weight-bold">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="text-grey text-caption font-weight-bold">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="text-grey text-caption font-weight-bold">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" xs="2" sm="4" md="2">
            <div class="text-grey text-caption font-weight-bold">Status</div>
            <v-chip small :class="`${project.status} text-white caption`">{{
              project.status
            }}</v-chip>
          </v-col>
          <v-divider class="mt-2"></v-divider>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "TT Patel",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Rutvik Shah",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Jay Patel",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Ruturaj Mahida",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
     addGET() {
      fetch(
        "https://todo-d5633-default-rtdb.asia-southeast1.firebasedatabase.app/test.json"
      )
        .then((response) => {
          console.log("results", response)
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log("results", data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id]["title"],
              person: data[id]["person"],
              due:data[id]['due'],
              status:[id]['status'],
            });
          }
          this.projects= results;
        });
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
