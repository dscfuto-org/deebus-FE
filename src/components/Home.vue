<template>
  <v-container>
      <v-card min-width="300" min-height="500">
        <div class="text-center">
          Home component
        </div>
      </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      
    }),
    beforeCreate(){
      location.href = "signin";
    }
  }
</script>
