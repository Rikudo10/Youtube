<script>
export default {
    data(){
        return {
            itemName: null
        }
    },
    methods: {
        submitForm(){
            this.$emit('onSubmitCustom', this.itemName)
            this.itemName = null
        },
    }
}
</script>
<template>
    <form @submit.prevent="submitForm">
        <input v-model="itemName" />
        <button type="submit">Add New Todo Item</button>
    </form>
</template>