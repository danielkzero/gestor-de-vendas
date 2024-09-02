<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Voltar"></ion-back-button>
                </ion-buttons>
                <ion-title>Pedidos</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-fab horizontal="end" vertical="bottom" slot="fixed">
                <ion-fab-button>
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
            <ion-segment v-model="selectedSegment">
                <ion-segment-button value="todos">
                    <ion-label>Todos</ion-label>
                </ion-segment-button>
                <ion-segment-button value="enviados">
                    <ion-label>Não enviados</ion-label>
                </ion-segment-button>
            </ion-segment>

            <div class="text-center my-2">
                <div class="d-flex justify-content-center">
                    <div class="d-flex align-items-center mx-1">
                        <span>
                            <ion-icon name="triangle" slot="start" color="warning" class="me-2"></ion-icon>
                        </span>
                        <span>Orçamento</span>
                    </div>
                    <div class="d-flex align-items-center mx-1">
                        <span>
                            <ion-icon name="ellipse" slot="start" color="success" class="me-2"></ion-icon>
                        </span>
                        <span>Concluído</span>
                    </div>
                    <div class="d-flex align-items-center mx-1">
                        <span>
                            <ion-icon name="square" slot="start" color="danger" class="me-2"></ion-icon>
                        </span>
                        <span>Faturado</span>
                    </div>
                </div>
            </div>
            <ion-list v-if="selectedSegment === 'todos'">
                <SegmentoPedidos :pedidos="pedidos"></SegmentoPedidos>
            </ion-list>
            <ion-list v-else>
                <SegmentoPedidos :pedidos="naoenviados"></SegmentoPedidos>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonFab,
    IonFabButton,
    IonBackButton,
    IonButtons,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonAvatar
} from '@ionic/vue';
import { triangle, ellipse, square, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import SegmentoPedidos from '@/components/SegmentoPedidos.vue';
addIcons({
    triangle: triangle,
    ellipse: ellipse,
    square: square,
    add: add,
});
export default {
    components: {
        IonFab,
        IonFabButton,
        IonBackButton,
        IonButtons,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonSegment,
        IonSegmentButton,
        IonList,
        IonItem,
        IonIcon,
        IonLabel,
        IonAvatar,
        SegmentoPedidos
    },
    data() {
        return {
            selectedSegment: 'todos',
            pedidos: [
                {
                    id: 1,
                    titulo: '25891',
                    cliente: 'TECIDOS E ARMARINHO SÃO BARTOLOMEU',
                    representante: 'Daniel Ramos',
                    total: 1851.98,
                    status: 'Orçamento',
                    icon: 'triangle',
                    color: 'warning',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
                {
                    id: 5,
                    titulo: '25897',
                    cliente: 'CASA DO CONSTRUTOR',
                    representante: 'Raimundo',
                    total: 2510.65,
                    status: 'Concluído',
                    icon: 'ellipse',
                    color: 'success',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
                {
                    id: 6,
                    titulo: '25898',
                    cliente: 'JOSE ANTUNES LTDA',
                    representante: 'Ronaldo',
                    total: 1235.85,
                    status: 'Faturado',
                    icon: 'square',
                    color: 'danger',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
                {
                    id: 7,
                    titulo: '25899',
                    cliente: 'LOJÃO DA CONSTRUÇÃO ME',
                    representante: 'Ricardo',
                    total: 4512.15,
                    status: 'Faturado',
                    icon: 'square',
                    color: 'danger',
                    data: '28/08/2024',
                    nivel: 'NIVEL 2'
                },
            ],
            naoenviados: [
                {
                    id: 2,
                    titulo: '25893',
                    cliente: 'PONTO CERTO MATERIAL DE CONSTRUÇÃO',
                    representante: 'Raimundo',
                    total: 2610.2,
                    status: 'Orçamento',
                    icon: 'triangle',
                    color: 'warning',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
                {
                    id: 3,
                    titulo: '25894',
                    cliente: 'TRES IRMÃOS COMERCIO LTDA',
                    representante: 'Raimundo',
                    total: 3554.69,
                    status: 'Concluído',
                    icon: 'ellipse',
                    color: 'success',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
                {
                    id: 4,
                    titulo: '25896',
                    cliente: 'JARDIM DO LAR',
                    representante: 'Daniel Ramos',
                    total: 1989.97,
                    status: 'Faturado',
                    icon: 'square',
                    color: 'danger',
                    data: '02/09/2024',
                    nivel: 'NIVEL 1'
                },
            ],
        };
    }
};
</script>

<style scoped>
ion-icon {
    font-size: 24px;
}

ion-label p {
    margin: 0;
    font-size: 14px;
    color: var(--ion-color-medium);
}

.color-azure {
    background-color: azure;
}
</style>