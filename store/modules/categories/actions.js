import store from "../../index";
import axios from "axios";

const actions = {
    addUser() {
        axios.post(`https://items.magischer.de/api/categories`,
            {
                "name": "giorgi",
                "type": "news",
            },
        {

            headers: {
                "Accept": "application/json",
                    "Authorization": `Bearer ${store.getters['register/token']}`
            }
        }

    )

    },
    deleteUser() {
        axios.delete(`https://items.magischer.de/api/categories/141`,

            {

                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${store.getters['register/token']}`
                }
            }

        )

    },
    editUser() {
        axios.put(`https://items.magischer.de/api/categories/141`,
            {
                "name": "giorgi",
                "type": "news",
            },
            {

                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${store.getters['register/token']}`
                }
            }

        )

    },
}
export default actions