<template>
    <ion-modal :is-open="aberto">
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Editar Produto
                </ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="fecharModal">
                        <ion-icon name="close-outline"></ion-icon> Fechar
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="salvarAlteracoes">
                        Salvar
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item class="ion-text-center">
                <!-- Foto do Produto -->
                <img :src="produtoEditado.foto || 'https://ionicframework.com/docs/img/demos/thumbnail.svg'"
                    alt="Foto do Produto">
            </ion-item>

            <!-- Nome do Produto -->
            <ion-item lines="none">
                <ion-label class="ion-text-center">
                    <h2>{{ produtoEditado.NmProdutoERP }}</h2>
                </ion-label>
            </ion-item>

            <!-- Código do Produto -->
            <ion-item>
                <ion-label position="stacked">Código</ion-label>
                <ion-input v-model="produtoEditado.CdChamada" placeholder="Código" disabled></ion-input>
            </ion-item>

            <!-- Quantidade -->
            <ion-item>
                <ion-label position="stacked" class="text-secondary">{{ produtoEditado.unidade }}</ion-label>
                <div class="d-flex align-items-end fs-1">
                    {{ produtoEditado.quantidade }}
                </div>
            </ion-item>


            <ion-item color="light" class="rounded">
                <ion-label slot="end" class="d-flex justify-content-center">
                    <ion-avatar class="d-flex me-2 text-bg-secondary m-auto" style="width: 20px; height: 20px;">
                        <i class='bx bx-dollar mx-auto my-auto'></i>
                    </ion-avatar>
                    <div class="m-auto fs-5 fw-semibold">{{ produtoEditado.preco }}</div>
                </ion-label>
                <ion-label slot="end" class="ion-text-nowrap ps-1 m-0" style="min-width: 100px; max-width: 100px;">
                    <ion-button fill="outline" @click="diminuirQuantidade"><ion-icon
                            name="remove-outline"></ion-icon></ion-button>
                    <ion-button @click="aumentarQuantidade"><ion-icon
                            name="add"></ion-icon></ion-button>
                </ion-label>
            </ion-item>

            <!-- Unidade -->
            <ion-item>
                <ion-label position="stacked">Unidade</ion-label>
                <ion-input v-model="produtoEditado.unidade" placeholder="Unidade"></ion-input>
            </ion-item>

            <!-- Preço -->
            <ion-item>
                <ion-label position="stacked">Preço</ion-label>
                <ion-input v-model.number="produtoEditado.preco" placeholder="Preço" type="number"></ion-input>
            </ion-item>

            <!-- Desconto -->
            <ion-item>
                <ion-label position="stacked">Desconto</ion-label>
                <ion-input v-model.number="produtoEditado.desconto" placeholder="Desconto" type="number"></ion-input>
            </ion-item>

            <!-- Acréscimo -->
            <ion-item>
                <ion-label position="stacked">Acréscimo</ion-label>
                <ion-input v-model.number="produtoEditado.acrescimo" placeholder="Acréscimo" type="number"></ion-input>
            </ion-item>

            <!-- Preço Líquido -->
            <ion-item>
                <ion-label position="stacked">Preço Líquido</ion-label>
                <ion-input v-model.number="produtoEditado.precoLiquido" placeholder="Preço Líquido" type="number"
                    disabled></ion-input>
            </ion-item>

            <!-- Substituição Tributária -->
            <ion-item>
                <ion-label position="stacked">Substituição Tributária</ion-label>
                <ion-input v-model.number="produtoEditado.substituicaoTributaria" placeholder="Substituição Tributária"
                    type="number"></ion-input>
            </ion-item>

            <!-- Observação -->
            <ion-item>
                <ion-label position="stacked">Observação</ion-label>
                <ion-textarea v-model="produtoEditado.observacao" placeholder="Observação" :auto-grow="true"></ion-textarea>
            </ion-item>
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-text slot="end">Total: <span class="text-success fw-semibold">R$ {{ calcularTotalPrecoLiquido() }}</span></ion-text>
            </ion-toolbar>
        </ion-footer>
    </ion-modal>
</template>

<script lang="ts">
import {
    IonText, IonFooter, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput, IonAvatar, IonIcon, IonTextarea
} from '@ionic/vue';
import { addIcons } from 'ionicons';
import { closeOutline, add, removeOutline } from 'ionicons/icons';
addIcons({
    closeOutline: closeOutline, add: add, removeOutline: removeOutline
});
export default {
    components: {
        IonText, IonFooter, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput, IonAvatar, IonIcon, IonTextarea        
    },
    props: {
        aberto: {
            type: Boolean,
            default: false
        },
        produto: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            produtoEditado: { ...this.produto }
        };
    },
    emits: ['close', 'salvar', 'telaAddProdutos'], 
    watch: {
        produto(novoProduto) {
            this.produtoEditado = { ...novoProduto };
        }
    },
    methods: {
        fecharModal() {
            this.$emit('close');
        },
        salvarAlteracoes() {
            this.produtoEditado.precoLiquido = this.calcularPrecoLiquido();
            console.log(this.produtoEditado);
            this.$emit('salvar', this.produtoEditado);
            this.fecharModal();
        },
        aumentarQuantidade() {
            this.produtoEditado.quantidade++;
        },
        diminuirQuantidade() {
            if (this.produtoEditado.quantidade > 1) {
                this.produtoEditado.quantidade--;
            }
        },
        calcularPrecoLiquido() {            
            const { preco, desconto, acrescimo } = this.produtoEditado;
            const precoDescontado = preco - (preco * ((desconto || 0) / 100));
            const precoAcrescido = precoDescontado + (precoDescontado * ((acrescimo || 0) / 100));
            this.produtoEditado.precoLiquido = precoAcrescido.toFixed(2);
            return precoAcrescido;
        },
        calcularTotalPrecoLiquido() {            
            const {quantidade } = this.produtoEditado;
            const total = quantidade * this.calcularPrecoLiquido();
            return total.toFixed(2);
        }
    }
};
</script>
