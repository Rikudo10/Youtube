<script setup>
defineProps({
    item: Object
})

</script>
<template>
    <!--Card 1-->
    <div class="max-w-sm overflow-hidden shadow-lg">
        <a :href="item.url">
            <router-link :to="{ name: 'info', params: { id: item.id } }">
                <img :src="item.cover">
            </router-link>
        </a>
        <div class="cart px-6 py-4">
            <span class="title">{{ item.title }} </span>
            <div class="photodiv">
                <img class="photo" :src="item.photo"> {{ item.name }}
            </div>
            <span class="views">{{ item.views }}</span>
        </div>
    </div>
</template>

<style scoped>
.views {
    color: white;
}

.photo {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.photodiv {
    display: flex;
    color: white;
    gap: 10px;
    padding-top: 10px;
}

.title {
    color: white;
    text-align: right !important;
}

.cart {
    text-align: left !important;
}

.px-6 {
    padding-left: none;
    padding-right: none;
}

.px-6 {
    padding-left: none;
    padding-right: none;
}

.py-4 {
    padding-top: 0;
}</style>