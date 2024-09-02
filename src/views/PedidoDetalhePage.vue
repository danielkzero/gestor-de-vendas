<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Voltar"></ion-back-button>
                </ion-buttons>
                <ion-title>Detalhes do Pedido</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div id="container" class="ion-padding">

                <ion-list>
                    <ion-item>
                        <ion-label><ion-badge color="warning">Em orçamento</ion-badge></ion-label>
                    </ion-item>
                    <ion-item router-link="/pedido">
                        <ion-label class="text-secondary d-flex ">
                            <ion-icon name="storefront" class="mt-1 me-2"></ion-icon> <span>Selecione o cliente</span>
                        </ion-label>
                    </ion-item>
                    <ion-button expand="full" class="my-3" @click="TelaAddProdutos(true)">ADICIONAR PRODUTOS</ion-button>
                    <ion-button expand="full" class="my-3" color="light">DEFINIR DESCONTOS E ACRÉSCIMOS</ion-button>
                </ion-list>



                <ion-modal :is-open="Aberta">
                    <ion-header>
                        <ion-toolbar>
                            <ion-title>
                                Catálogo 
                            </ion-title>
                            <ion-buttons slot="start">
                                <ion-button @click="TelaAddProdutos(false)">
                                    <ion-icon name="chevron-back-outline"></ion-icon> Voltar
                                </ion-button>
                            </ion-buttons>
                        </ion-toolbar>
                        <ion-toolbar>
                            <ion-searchbar placeholder="Buscar produtos"></ion-searchbar>
                            <ion-button slot="end" fill="clear" size="small"><ion-icon slot="end" name="barcode-outline"></ion-icon></ion-button>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content class="ion-padding">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Magni illum quidem recusandae ducimus quos reprehenderit. 
                            Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. 
                            Eaque, dicta.
                        </p>
                    </ion-content>
                </ion-modal>



                <ion-list>
                    <ion-list-header>
                        <ion-label>Detalhes</ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-label>
                            <ion-input label="Data Emissão" label-placement="stacked" type="date"></ion-input>
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-select label="Forma de pagamento" label-placement="stacked">
                            <ion-select-option value="7">7 dias</ion-select-option>
                            <ion-select-option value="14">14 dias</ion-select-option>
                            <ion-select-option value="30">30 dias</ion-select-option>
                            <ion-select-option value="10/20/30">10/20/30 dias</ion-select-option>
                            <ion-select-option value="10/20/30/40">10/20/30/40 dias</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-select label="Especial" label-placement="stacked">
                            <ion-select-option value="50">50</ion-select-option>
                            <ion-select-option value="100">100</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>

                <ion-list>
                    <ion-list-header>
                        <ion-label>Informações adicionais</ion-label>
                    </ion-list-header>
                    <ion-item>
                        <ion-label>
                            <ion-textarea label="Observação" label-placement="stacked" :auto-grow="true"
                                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum."></ion-textarea>
                        </ion-label>
                    </ion-item>
                </ion-list>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-button expand="full">ENVIAR EMAIL</ion-button>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full">GERAR PEDIDO</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">

import {
    IonSearchbar,
    IonModal,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonListHeader,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonButton,
    IonButtons,
    IonBackButton,
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle
} from '@ionic/vue';
import { addIcons } from 'ionicons';
import { storefront, chevronBackOutline, barcodeOutline } from 'ionicons/icons';

addIcons({
    storefront: storefront,
    chevronBackOutline: chevronBackOutline, barcodeOutline
});
export default {
    components: {
        IonSearchbar,
        IonModal,
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonTextarea,
        IonSelect,
        IonSelectOption,
        IonListHeader,
        IonIcon,
        IonList,
        IonItem,
        IonLabel,
        IonBadge,
        IonButton,
        IonButtons,
        IonBackButton,
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar,
        IonTitle
    },
    data() {
        return {
            id: this.$route.params.id,
            Aberta: false,
        }
    },
    methods: {
        TelaAddProdutos(Aberta: Bool) {
            this.Aberta = Aberta;
        }
    }
}
</script>