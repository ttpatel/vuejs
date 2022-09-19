<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="team">
    <h1 class="text-pink">Team</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="project in team"
          :key="project.name"
        >
          <v-card flat class="text-center ma-3 mx-auto"  height="220">
            <v-responsive class="pt-4"> 
              <v-avatar size="x-large"  color="info">
                <span>{{(project.initial)}}</span>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-subtitle-2">{{ project.name }}</div>
              <div class="text-subtitle-2 text-grey">{{ project.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon variant="small" left>mdi-message</v-icon>
                <span class="mx-3">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "TT Patel", role: "Web developer",initial:"TP" },
        { name: "Rutvik Shah", role: "Full Stack Developer",initial:"RS" },
        { name: "Jay Patel", role: "Management",initial:"JP" },
        { name: "Ruturaj Mahida", role: "DotNet Developer" ,initial:"RM"},
        { name: "Het Parekh", role: "Web Developer(Angular)",initial:"HP"},
      ],
    };
  },
  //  methods: {
  //  initials(){
  //   const name = this.team.name.split('')
  //   return `${name[0].charAt(0)} ${name[1]?name[1].charAt(0):''}`;
  //  }
  // },
};
</script>