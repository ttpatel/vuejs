<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="projects">
    <h1 class="text-pink">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-title> {{project.title}} </v-expansion-panel-title>
          <v-expansion-panel-text class="px-4 text-grey">
            <div class="font-weight-bold">{{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
      ]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project =>{
        return project.person === "TT Patel"
      })
      }
      },

};
</script>