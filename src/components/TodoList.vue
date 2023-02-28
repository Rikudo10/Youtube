<script>
import useProducts from '../composables/useProducts'
import VideoList from '../VideoList.vue'
export default {
    setup(props, context){

        const { products } = useProducts()

        function changeDoneStatus(item) {
            context.emit('onChangeDoneStatus', item)
        }

        function deleteRecord(item) {
            context.emit('onDelete', item)
        }

        function showProductDetails(){
            context.emit('onShowProductDetails', id)
        }

        return {
            products,
            changeDoneStatus,
            deleteRecord,
            showProductDetails
        }
        
    }
}
</script>

<template>
    <ul>
        <VideoList v-for="item in products" :key="item.index" :itemData="item" :renderCheckbox="changeStatus"
            :renderDeleteBtn="canDelete" @onChange="changeDoneStatus($event)" @onDelete="deleteRecord($event)" @onShow="showProductDetails" />
    </ul>
</template>