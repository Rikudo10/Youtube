import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function useProducts(){

    const product = ref(null)
    const url = 'http://items.magischer.de/api/products'
    const limits = [ 5, 10, 15, 20, 50 ]
    const langs = [ 'en', 'ge' ]
    const limit = ref(limits[0])
    const lang = ref(langs[0])
    const products = ref([])
    const meta = ref()

    function getProducts(baseUrl = url){
        axios.get(baseUrl, {
            params: {
                limit: limit.value,
                lang: lang.value,
            }
        }).then((response) => {
            products.value = response.data.data
            meta.value = response.data
        })
    }

    function createProduct(){
        // ...
    }

    function updateProduct(){
        // ...
    }

    function deleteProduct(){
        // ...
    }

    function showProduct(id){
        axios.get(url + '/' + id).then(response => product.value = response.data)
    }

    onMounted(function() {
        getProducts()
    })

    return {
        meta,
        products,
        product,
        getProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        showProduct,
    }
    
}