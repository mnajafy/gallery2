<template>
    <div class="gallery">
        <b-jumbotron>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-jumbotron>

        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-card class="">
                      <b-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae odit ratione ullam fugit. Quisquam quo pariatur perspiciatis ratione ipsa! Rerum quos autem voluptas excepturi porro quam reiciendis vel dolore enim iste id perspiciatis adipisci mollitia provident ullam quibusdam unde, recusandae eos.</b-card-text>
                      <b-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sequi culpa unde? Enim suscipit nostrum eum.</b-card-text>
                    </b-card>
                </b-col>

                <b-col cols="12" lg="2">
                    <b-form-input class="mb-2" id="search" v-model="search" placeholder="Enter your name"></b-form-input>
                    <span v-if="search && filterListGallery.length > 0" class="mt-2 mb-3 d-block">
                        {{ filterListGallery.length}} résultat<span v-if="filterListGallery.length > 1">s</span> trouver 
                        </span>
                    <b-button v-on:click="search = ''" class="btn btn-secondary border rounded mb-2">All</b-button>
                    <b-button v-on:click="search = category.name" class="btn btn-secondary border rounded mb-2" v-for="category in categories" :key="category.id">{{ category.name }}</b-button>
                </b-col>

                <b-col cols="12" lg="10">
                    <b-card-group columns>
                        <b-card v-for="product in filterListGallery" :key="product.id"
                            :title="product.title"
                            :img-src="'https://picsum.photos/200/100?random=' + product.id"
                            :img-alt="product.title"
                            img-top
                        >
                            <b-card-text>
                                {{ product.content }}
                            </b-card-text>
                        </b-card>
                        <b-card 
                            v-if="filterListGallery.length == 0"
                            title="Désole"
                            class=""
                        >
                            <b-carrd-text>Aucun résultat trouvé</b-carrd-text>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'Gallery',
    components: {
    //   Banner
    },
    data: () => {
        return {
            products: [
                {id: 1, title: 'dog', content: 'This is a wider card with supporting text below as a natural lead-in', img: 'dog.jpg', category: 'animal'},
                {id: 2, title: 'girl', content: 'This  supporting text below as a natural lead-in', img: 'girl.jpg', category: 'girl'},
                {id: 3, title: 'city', content: ' card with supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 4, title: 'sport', content: 'This is a wider card with supporting text lead-in', img: 'dog.jpg', category: 'sport'},
                {id: 5, title: 'baby', content: 'This is a wider card with supporti natural lead-in', img: 'baby.jpg', category: 'baby'},
                {id: 6, title: 'famille', content: 'This is a wider card with supporting text below as a', img: 'baby.jpg', category: 'famille'},
                {id: 7, title: 'dog', content: 'This is a wider card with supporting text below as a natural lead-in', img: 'dog.jpg', category: 'animal'},
                {id: 8, title: 'girl', content: 'This  supporting text below as a natural lead-in', img: 'girl.jpg', category: 'girl'},
                {id: 9, title: 'city', content: ' card with supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 10, title: 'sport', content: 'This is a wider card with supporting text lead-in', img: 'dog.jpg', category: 'sport'},
                {id: 11, title: 'baby', content: 'This is a wider card with supporti natural lead-in', img: 'baby.jpg', category: 'baby'},
                {id: 12, title: 'famille', content: 'This is a wider card with supporting text below as a', img: 'baby.jpg', category: 'famille'},
                {id: 13, title: 'dog', content: 'This is a wider card with supporting text below as a natural lead-in', img: 'dog.jpg', category: 'animal'},
                {id: 14, title: 'girl', content: 'This  supporting text below as a natural lead-in', img: 'girl.jpg', category: 'girl'},
                {id: 15, title: 'city', content: ' card with supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 16, title: 'sport', content: 'This is a wider card with supporting text lead-in', img: 'dog.jpg', category: 'sport'},
                {id: 17, title: 'baby', content: 'This is a wider card with supporti natural lead-in', img: 'baby.jpg', category: 'baby'},
                {id: 18, title: 'famille', content: 'This is a wider card with supporting text below as a', img: 'baby.jpg', category: 'famille'},
                {id: 19, title: 'dog', content: 'This is a wider card with supporting text below as a natural lead-in', img: 'dog.jpg', category: 'animal'},
                {id: 20, title: 'girl', content: 'This  supporting text below as a natural lead-in', img: 'girl.jpg', category: 'girl'},
                {id: 21, title: 'city', content: ' card with supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 22, title: 'sport', content: 'This is a wider card with supporting text lead-in', img: 'dog.jpg', category: 'sport'},
                {id: 23, title: 'baby', content: 'This is a wider card with supporti natural lead-in', img: 'baby.jpg', category: 'baby'},
                {id: 24, title: 'famille', content: 'This is a wider card with supporting text below as a', img: 'baby.jpg', category: 'famille'},
                {id: 25, title: 'Un', content: 'This is a wider card with supporting text below as a', img: 'baby.jpg', category: 'un'},                
                {id: 26, title: 'girl', content: ' text below as a natural lead-in', img: 'girl.jpg', category: 'girl'},
                {id: 27, title: 'city', content: ' Supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 28, title: 'city', content: ' card with  below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 29, title: 'city', content: ' card with supporting text  a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 30, title: 'city', content: ' card with supporting text below as a natural lead-in', img: 'city.jpg', category: 'city'},
                {id: 31, title: 'city', content: ' card with lead-in', img: 'city.jpg', category: 'city'},
                {id: 32, title: 'city', content: '  text below as a natural lead-in', img: 'city.jpg', category: 'city'},

            ],
            categories: [
                {
                    id: 1,
                    name: 'baby'
                },
                {
                    id: 2,
                    name: 'dog'
                },
                {
                    id: 3,
                    name: 'city'
                },
                {
                    id: 4,
                    name: 'girl'
                },
                {
                    id: 5,
                    name: 'un'
                }
            ],
            search: '',
            items: [
                {
                    text:'Home', 
                    href: '#'
                },
                {
                    text:'Gallery', 
                    active: true
                }
            ]
        }
    },
    computed: {
        filterListGallery() {
            return this.products.filter((product) => {
                return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        urlImage: function (value) {
            return require('../../src/assets/galleries/images/slider/' + value)
        }
    }
}
</script>