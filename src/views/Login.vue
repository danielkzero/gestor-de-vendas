<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="login-container d-flex justify-content-center align-items-center h-100">
        <div class="w-100" style="max-width: 400px;">
          <ion-input v-model="username" placeholder="Username" clear-input></ion-input>
          <ion-input v-model="password" placeholder="Password" type="password" clear-input></ion-input>
          <ion-button expand="block" @click="login">Login</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from '@ionic/vue';

export default {
  name: 'Login',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
  },
  data() {
    return {
      username: {
        type: String,
        default: ''
      },
      password: {
        type: String,
        default: ''
      },
    };
  },
  methods: {
    login() {
      if (this.username === '000111' && this.password === 'valeplast') {
        localStorage.setItem('auth', JSON.stringify({ username: this.username, password: this.password, loggedIn: true }));
        this.$router.push('/principal');
      } else {
        alert('Credenciais inválidas!');
      }
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem('auth'))) {
      const auth = JSON.parse(localStorage.getItem('auth'));
      const usernamelocal = auth.username;
      const passwordlocal = auth.password;
      this.username = usernamelocal;
      this.password = passwordlocal;
      if (auth && auth.loggedIn) {
        this.$router.push('/principal');
      }
    }
  },
};
</script>

<style scoped>
.ion-content {
  height: 100%;
}
</style>
