<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Gestor de Vendas</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" class="ion-padding">
        <ion-list>
          <ion-item v-for="(item, index) in items" :key="index" button :router-link="item.route">
            <ion-avatar slot="start">
              <i :class="item.icone"></i>
            </ion-avatar>
            <ion-label>{{ item.menu }}</ion-label>
          </ion-item>
        </ion-list>
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

addIcons({
  add: add,
});

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  },
  data() {
    return {
      items: [
        { menu: 'Pedidos', icone: 'bx bx-clipboard', route: '/pedido' },
        { menu: 'Clientes', icone: 'bx bx-group', route: '/cliente' },
        { menu: 'Financeiro', icone: 'bx bx-wallet', route: '/financeiro' },
        { menu: 'Produtos', icone: 'bx bx-box', route: '/produto' },
        { menu: 'Sincronismo', icone: 'bx bx-sync', route: '/sincronismo' },
        { menu: 'Sobre', icone: 'bx bx-info-circle', route: '/sobre' },
      ],
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
}

.bx {
  font-size: 24px;
  margin-top: 7px;
  color: var(--ion-color-primary);
}
</style>
