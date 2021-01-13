export default {
    state: {
        products: [
            {
                title: 'Набор для путешествий «Baxter of California»',
                price: 2900,
                imageUrl: require('@/assets/img/card-img-1.jpg')
            },
            {
                title: 'Увлажняющий кондиционер «Baxter of California»',
                price: 750,
                imageUrl: require('@/assets/img/card-img-2.jpg')
            },
            {
                title: 'Гель для волос «SUAVECITO»',
                price: 350,
                imageUrl: require('@/assets/img/card-img-3.jpg')
            },
            {
                title: 'Глина для укладки волос «American crew»',
                price: 500,
                imageUrl: require('@/assets/img/card-img-4.jpg')
            },
            {
                title: 'Гель для волос «AMERICAN CREW»',
                price: 300,
                imageUrl: require('@/assets/img/card-img-5.jpg')
            },
            {
                title: 'Набор для бритья «Baxter of California»',
                price: 3900,
                imageUrl: require('@/assets/img/card-img-6.jpg')
            }
        ]
    },
    getters: {
        products: ({ products }) => products
    }
}
