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
                    <ion-button expand="full" class="my-3" @click="TelaAddProdutos(true)">ADICIONAR
                        PRODUTOS</ion-button>
                    <ion-button expand="full" class="my-3" color="light">DEFINIR DESCONTOS E ACRÉSCIMOS</ion-button>
                </ion-list>


                <ModalCatalogoProdutos :aberto="Aberta" :dados="produtos" @TelaAddProdutos="TelaAddProdutos"></ModalCatalogoProdutos>


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
import { storefront, chevronBackOutline, barcodeOutline, add, removeOutline } from 'ionicons/icons';
import ModalCatalogoProdutos from '@/components/ModalCatalogoProdutos.vue';
addIcons({
    storefront: storefront,
    chevronBackOutline: chevronBackOutline, barcodeOutline, add, removeOutline
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
        IonTitle,
        ModalCatalogoProdutos
    },
    data() {
        return {
            id: this.$route.params.id,
            Aberta: false,
            produtos: [
                { "CdChamada": "09.022", "NmProdutoERP": "MANG. JARDIM DUPLAFLEX - 10 MTS", "preco": 9.01 },
                { "CdChamada": "09.024", "NmProdutoERP": "MANG. JARDIM DUPLAFLEX - 20 MTS", "preco": 11.42 },
                { "CdChamada": "09.025", "NmProdutoERP": "MANG. JARDIM DUPLAFLEX - 30 MTS", "preco": 15.85 },
                { "CdChamada": "09.023", "NmProdutoERP": "MANG. JARDIM DUPLAFLEX - 15 MTS", "preco": 10.50 },
                { "CdChamada": "09.001", "NmProdutoERP": "MANGUEIRA CRISTAL 5/16\"X0,8 MM - 50 MTS", "preco": 22.55 },
                { "CdChamada": "09.008", "NmProdutoERP": "MANGUEIRA CRISTAL 1/2\"X2,0 MM - 50 MTS", "preco": 33.54 },
                { "CdChamada": "09.009", "NmProdutoERP": "MANGUEIRA CRISTAL 3/4\"X1,5 MM - 50 MTS", "preco": 44.87 },
                { "CdChamada": "09.012", "NmProdutoERP": "MANGUEIRA CRISTAL 1\"X2,5 MM - 50 MTS", "preco": 55.98 },
                { "CdChamada": "09.004", "NmProdutoERP": "MANGUEIRA CRISTAL 3/8\"X0,8 MM - 50 MTS", "preco": 66.50 },
                { "CdChamada": "09.005", "NmProdutoERP": "MANGUEIRA CRISTAL 3/8\"X1,0 MM - 50 MTS", "preco": 77.04 },
                { "CdChamada": "09.017", "NmProdutoERP": "MANGUEIRA TRAN�ADA PT 250 5/16\" - 50 MTS", "preco": 88.21 },
                { "CdChamada": "09.018", "NmProdutoERP": "MANGUEIRA TRAN�ADA PT 250 3/8\" - 50 MTS", "preco": 99.01 },
            ]
        }
    },
    methods: {
        TelaAddProdutos(Aberta: Bool) {
            this.Aberta = Aberta;
        }
    }
}
</script>