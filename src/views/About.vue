<template>
    <div class="about">
        <b-jumbotron>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-jumbotron>

        <b-container>
            <section class="py-3 py-md-4 py-lg-5">
                <b-row>
                    <b-col cols="12" md="4" class="d-flex justify-content-center align-items-center">
                        <div class="about-img">
                            <b-img src="../assets/galleries/images/beta.jpg" fluid ></b-img> 
                        </div>
                    </b-col>

                    <b-col cols="12" md="8">
                        <b-card class="" title="hello world !" sub-title="Card subtitle">
                            <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam dicta dolorem omnis ipsa tenetur nesciunt at possimus debitis ea!</b-card-text>
                            <b-card-text>Dolorem omnis ipsa tenetur nesciunt at possimus debitis ea!</b-card-text>
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>                            
                            <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam dicta dolorem omnis ipsa tenetur nesciunt at possimus debitis ea!</b-card-text>
                            <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam dicta dolorem omnis ipsa tenetur nesciunt at possimus debitis ea!</b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </section>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'About',
    components: {
    //   Banner
    },
    data: () => {
        return {
            items: [
                {
                    text: 'Home',
                    href: '#/'
                },
                {
                    text: 'About',
                    href: true
                }
            ]
        }
    }
}
</script>