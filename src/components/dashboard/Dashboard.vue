<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

const store = useStore();

const editings = ref({});


const newName = ref('');
const newUserName = ref('');

const toggleEditing = async (id) => {
    if (editings.value[id]) {
        delete editings.value[id];
        const data = {
            id,
            name: newName.value,
        };
        await editUser(data);
        newName.value = '';
    } else {
        editings.value[id] = true;
    }
}

const users = computed(() => store.getters['register/getUsers']);

const addUser = async () => {
    await store.dispatch('register/addUser', newUserName.value);
    newUserName.value = '';
};
const deleteUser = async (id) => await store.dispatch('register/deleteUser', id);
const editUser = async (data) => await store.dispatch('register/editUser', data);

onMounted(() => store.dispatch('register/getUsers'));
</script>

<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" class="px-6 py-3" />
                    <th scope="col" class="px-6 py-3" />
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <p v-if="!editings[user.id]">{{ user.name }}</p>
                        <div v-else>
                            <input type="text" v-model="newName" class="text-black"/>
                            <button @click="toggleEditing(user.id)">Save</button>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{ user.type }}
                    </td>
                    <td class="px-6 py-4">
                        <button @click="deleteUser(user.id)">Delete</button>
                    </td>
                    <td class="px-6 py-4">
                        <button @click="toggleEditing(user.id)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <input class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="newUserName" />
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="addUser">Add</button>
    </div>
</template>

<style scoped>
button {
    color: white;
}

table {
    background-color: white;
}
</style>

