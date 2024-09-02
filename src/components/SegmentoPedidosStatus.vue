<template>
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
</template>
<script type="ts">
import { IonIcon } from '@ionic/vue';
export default {
    components: {
        IonIcon
    }
}
</script>