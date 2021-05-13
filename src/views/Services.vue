<template>
    <div class="services">
        <b-jumbotron>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-jumbotron>

        <b-container>
            <section class="py-3 py-md-4 py-lg-5 border-bottom">
                <h1>Hello World !</h1>
                <blockquote class="blockquote-footer">Lorem ipsum dolor sit amet.</blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis deleniti at facere velit, adipisci delectus debitis laudantium perspiciatis iure!</p>
                <p>Voluptatum blanditiis, magnam quia assumenda asperiores dicta nesciunt, voluptatibus distinctio fuga, officia perspiciatis perferendis consequatur atque odio. Hic, sequi dolore.</p>
                <p>Amet aperiam ex blanditiis, quas eligendi voluptatum praesentium voluptate, asperiores in, labore quasi quis voluptatem porro molestiae dolore reprehenderit saepe?</p>
                <p>Perspiciatis architecto tempore velit, laudantium quae saepe eos sint quia provident ipsam similique enim recusandae veritatis exercitationem qui at excepturi.</p>
                <p>Consectetur perferendis autem iure earum perspiciatis repellendus nobis iste fugiat ex esse hic vel, at expedita dolorum commodi praesentium cum.</p>
            </section>
            
            <section class="py-3 py-md-4 py-lg-5 border-bottom">
                <h1>Hello World !</h1>
                <blockquote class="blockquote-footer">Lorem ipsum dolor sit amet.</blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis deleniti at facere velit, adipisci delectus debitis laudantium perspiciatis iure!</p>
                <p>Voluptatum blanditiis, magnam quia assumenda asperiores dicta nesciunt, voluptatibus distinctio fuga, officia perspiciatis perferendis consequatur atque odio. Hic, sequi dolore.</p>
                <p>Amet aperiam ex blanditiis, quas eligendi voluptatum praesentium voluptate, asperiores in, labore quasi quis voluptatem porro molestiae dolore reprehenderit saepe?</p>
                <p>Perspiciatis architecto tempore velit, laudantium quae saepe eos sint quia provident ipsam similique enim recusandae veritatis exercitationem qui at excepturi.</p>
                <p>Consectetur perferendis autem iure earum perspiciatis repellendus nobis iste fugiat ex esse hic vel, at expedita dolorum commodi praesentium cum.</p>
            </section>

            <section class="py-3 py-md-4 py-lg-5 border-bottom">
                <h1>Hello World !</h1>
                <blockquote class="blockquote-footer">Lorem ipsum dolor sit amet.</blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis deleniti at facere velit, adipisci delectus debitis laudantium perspiciatis iure!</p>
                <p>Voluptatum blanditiis, magnam quia assumenda asperiores dicta nesciunt, voluptatibus distinctio fuga, officia perspiciatis perferendis consequatur atque odio. Hic, sequi dolore.</p>
                <p>Amet aperiam ex blanditiis, quas eligendi voluptatum praesentium voluptate, asperiores in, labore quasi quis voluptatem porro molestiae dolore reprehenderit saepe?</p>
                <p>Perspiciatis architecto tempore velit, laudantium quae saepe eos sint quia provident ipsam similique enim recusandae veritatis exercitationem qui at excepturi.</p>
                <p>Consectetur perferendis autem iure earum perspiciatis repellendus nobis iste fugiat ex esse hic vel, at expedita dolorum commodi praesentium cum.</p>
            </section>
        </b-container> 
    </div>
</template>

<script>

export default {
    name: 'Services',
    components: {

    },
    data: () => {
        return {
            items: [
                {
                    text: 'Home',
                    href: '#/'
                },
                {
                    text: 'Services',
                    href: true
                }
            ]
        }
    }
}
</script>