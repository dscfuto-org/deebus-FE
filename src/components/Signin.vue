<template>
  <v-container fill-height>
      <v-row justify="center">
        <v-card class="pa-10 ml-5" min-width="350" flat>
        <!-- <v-img src="@/assets/logo-blue.png" width="80"></v-img> -->
        <v-img src="../assets/logo-blue.png" class="" width="80"></v-img>
        <div id="get-started">Sign in</div>
        <div class="" id="bottom-header" >Continue with DeeBus</div>
        <v-text-field
        outlined=""
        placeholder="Email Address"
        class="mt-4 body-2"
        color="#6372C1"
        dense
        id="full-name"
        >
        </v-text-field>
        <v-text-field
        outlined=""
        placeholder="Password"
        color="#6372C1"
        class="body-2"
        dense
        >
        </v-text-field>

        <v-row justify="center">
          <v-btn rounded="" class="text-capitalize" color="#6372C1">
          <div
          class="white--text font-weight-bold mx-5"
          id="button-text"
          >
            Sign in
          </div>
        </v-btn>
      </v-row>
      <div class="mt-4" id="account-text">
        New to Deebus?
        <a href="signup" id="link">Sign up</a>
      </div>
      </v-card>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Signup',

    data: () => ({
      
    }),
  }
</script>

<style scoped>
#account-text{
  font-family: ubuntu;
  font-size:12px;
  font-weight: bold;
}
 
#get-started{
font-family:ubuntu;
font-size: 30px;
font-weight: bold;
}

#full-name{
  height: 10px;
}

#button-text{
  font-size:13px;
  font-family: ubuntu;
}
#bottom-header{
  font-family: ubuntu;
}
#link{
  color: #6372C1;
}
</style>