<template>
    <div class="SliderMain">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                v-for="slide in slides" :key="slide.id"
                :caption="slide.title"
                :text="slide.content"
                :img-src="urlImage(slide.img)"
            >
            <b-button variant="outline-light">Voire plus</b-button>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: 'SliderMain',
        props: {
            msg: String
        },
        data: () => ({
            slides: [
                {
                    id: 1,
                    title: 'baby',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    img: 'baby.jpg'
                },
                {
                    id: 2,
                    title: 'pug',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    img: 'pug.jpg'
                },
                {
                    id: 3,
                    title: 'dog',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    img: 'dog.jpg'
                },
                {
                    id: 4,
                    title: 'city',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    img: 'city.jpg'
                },
                {
                    id: 5,
                    title: 'girl',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
                    img: 'girl.jpg'
                },
            ]
        }),
        methods: {
            urlImage: function (value) {
                return require('../../src/assets/galleries/images/slider/' + value)
            }
        }
    }
</script>