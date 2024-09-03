<template>
    <ion-modal :is-open="aberto">
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Catálogo
                </ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="$emit('TelaAddProdutos', false)">
                        <ion-icon name="chevron-back-outline"></ion-icon> Voltar
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="salvarPedido">
                        Salvar
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-toolbar>
                <ion-searchbar placeholder="Buscar produtos" v-model="busca"></ion-searchbar>
                <ion-icon slot="end" name="barcode-outline" size="large"></ion-icon>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card v-for="(produto, index) in produtosFiltrados" :key="index" class="m-2 p-0">
                <ion-card-content class="m-0 p-1">
                    <ion-list lines="none">
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </ion-thumbnail>
                            <ion-label>
                                <span class="ion-text-nowrap">{{ produto.NmProdutoERP }}</span>
                                <small class="d-block text-secondary">{{ produto.CdChamada }}</small>
                            </ion-label>
                            <ion-label slot="end" class="ion-text-nowrap ps-1 m-0 d-flex justify-content-center"
                                style="min-width: 100px; max-width: 100px;">
                                <p class="d-flex align-items-baseline">
                                    <span class="fs-1">{{ getQuantidade(produto.CdChamada) }}</span><span
                                        class="ms-1">UN</span>
                                </p>
                            </ion-label>
                        </ion-item>
                        <ion-item color="light" class="rounded">
                            <ion-label slot="end" class="d-flex justify-content-center">
                                <ion-avatar class="d-flex me-2 text-bg-secondary m-auto"
                                    style="width: 20px; height: 20px;">
                                    <i class='bx bx-dollar mx-auto my-auto'></i>
                                </ion-avatar>
                                <div class="m-auto fs-5 fw-semibold">{{ FormatoMoeda(produto.preco) }}</div>
                            </ion-label>
                            <ion-label slot="end" class="ion-text-nowrap ps-1 m-0"
                                style="min-width: 100px; max-width: 100px;">
                                <ion-button fill="outline" @click="diminuirQuantidade(produto.CdChamada)"><ion-icon
                                        name="remove-outline"></ion-icon></ion-button>
                                <ion-button @click="adicionarProduto(produto.CdChamada)"><ion-icon
                                        name="add"></ion-icon></ion-button>
                            </ion-label>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-text slot="start">{{ totalItensSelecionados }} selecionados</ion-text>
                <ion-text slot="end">Total: <span class="text-success fw-semibold">R$ {{ totalPreco.toFixed(2)
                        }}</span></ion-text>
            </ion-toolbar>
        </ion-footer>
    </ion-modal>
</template>

<script lang="ts">
import {
    IonFooter, IonText, IonAvatar, IonSearchbar, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel
} from '@ionic/vue';
import { addIcons } from 'ionicons';
import { storefront, chevronBackOutline, barcodeOutline, add, removeOutline } from 'ionicons/icons';

addIcons({
    storefront: storefront,
    chevronBackOutline: chevronBackOutline, barcodeOutline, add, removeOutline
});

export default {
    components: {
        IonFooter, IonText, IonAvatar, IonSearchbar, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonCard, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel
    },
    props: {
        aberto: {
            type: Boolean,
            default: false
        },
        dados: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            id: this.$route.params.id,
            itensPedido: {},
            busca: ''
        };
    },
    methods: {
        adicionarProduto(CdChamada: string) {
            if (!this.itensPedido[CdChamada]) {
                this.itensPedido[CdChamada] = { quantidade: 1 };
            } else {
                this.itensPedido[CdChamada].quantidade++;
            }
        },
        diminuirQuantidade(CdChamada: string) {
            if (this.itensPedido[CdChamada] && this.itensPedido[CdChamada].quantidade > 0) {
                this.itensPedido[CdChamada].quantidade--;
                if (this.itensPedido[CdChamada].quantidade === 0) {
                    delete this.itensPedido[CdChamada];
                }
            }
        },
        getQuantidade(CdChamada: string) {
            return this.itensPedido[CdChamada] ? this.itensPedido[CdChamada].quantidade : 0;
        },
        salvarPedido() {
            this.$emit('salvarPedido', this.itensPedido);
            this.$emit('TelaAddProdutos', false);
        },
        FormatoMoeda(moeda: Number) {
            return (moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    },
    computed: {
        produtosFiltrados() {
            // Transformar a busca em um array de palavras, removendo espaços extras e ignorando a capitalização
            const termosBusca = this.busca.trim().toLowerCase().split(/\s+/);

            // Filtrar produtos
            return this.dados.filter(produto => {
                const nomeProduto = produto.NmProdutoERP.toLowerCase();

                // Verificar se todas as palavras de busca estão presentes no nome do produto
                return termosBusca.every(termo => nomeProduto.includes(termo));
            });
        },
        totalItensSelecionados() {
            return Object.keys(this.itensPedido).reduce((total, CdChamada) => total + this.itensPedido[CdChamada].quantidade, 0);
        },
        totalPreco() {
            return Object.keys(this.itensPedido).reduce((total, CdChamada) => {
                const produto = this.dados.find(item => item.CdChamada === CdChamada);
                return total + (produto.preco * this.itensPedido[CdChamada].quantidade);
            }, 0);
        }
    }
};
</script>
