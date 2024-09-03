<template>
    <ion-item v-for="(pedido, index) in pedidos" :key="index" :router-link="'/pedido/' + pedido.id">
        <ion-label slot="end" class="ion-text-nowrap" style="min-width: 100px; max-width: 100px;">
            <p class="d-flex align-items-center">
                <span>
                    <ion-icon :name="pedido.icon" :color="pedido.color"
                        style="width: 15px; padding-top: 4px; margin-right: 5px;"></ion-icon>
                </span>
                <span>
                    {{ pedido.status }}
                </span>
            </p>
            <p class="mt-2"><small>Emitido por:</small></p>
            <p class="mt-2">{{ pedido.representante }}</p>
            <p class="mt-2"><ion-badge>{{ pedido.nivel }}</ion-badge></p>
        </ion-label>
        <ion-label class="ion-text-nowrap">
            <div class="d-flex align-items-start">
                <ion-avatar class="d-flex me-2" style="width: 26px; height: 26px;">
                    <i class='bx bx-check-double text-success fs-3'></i>
                </ion-avatar>

                <span class="fs-5">
                    Pedido <span class="text-success">#{{ pedido.titulo }}</span>
                </span>
            </div>

            <ion-avatar class="d-flex color-azure d-inline-flex" style="width: 26px; height: 26px;">
                <i class='bx bx-store mx-auto my-auto'></i>
            </ion-avatar> {{ pedido.cliente }}

            <div class="mt-1">
                <ion-avatar class="d-flex color-azure d-inline-flex" style="width: 26px; height: 26px;">
                    <i class='bx bx-calendar mx-auto my-auto'></i>
                </ion-avatar> {{ pedido.data }}
            </div>

            <div class="d-flex align-items-start mt-1">
                <ion-avatar class="d-flex me-2 color-azure" style="width: 26px; height: 26px;">
                    <i class='bx bx-dollar mx-auto my-auto'></i>
                </ion-avatar>
                <h2 class="my-auto fw-semibold">{{ FormatoMoeda(pedido.total) }}</h2>
            </div>
        </ion-label>
    </ion-item>
</template>
<script lang="ts">
import {
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonAvatar,
    IonBadge
} from '@ionic/vue';
import { triangle, ellipse, square } from 'ionicons/icons';
import { addIcons } from 'ionicons';
addIcons({
    triangle: triangle,
    ellipse: ellipse,
    square: square
});

export default {
    components: {
        IonList,
        IonItem,
        IonIcon,
        IonLabel,
        IonAvatar,
        IonBadge
    },
    props: {
        pedidos: {
            type: Array,
            default: [] as any[]
        }
    },
    methods: {
        FormatoMoeda(moeda: Number) {
            return (moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    }
}
</script>

<style>
ion-label p {
    margin: 0;
    font-size: 14px;
    color: var(--ion-color-medium);
}

.color-azure {
    background-color: azure;
}
</style>