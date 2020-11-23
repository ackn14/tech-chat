<template>
  <v-card>
    <v-card-actions class="pt-0">
      <v-col cols="2" md="2">
        <v-btn icon color="grey" text dark @click="remove(task.id)">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>
