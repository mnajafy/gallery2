<template>
  <div class="home">
    <SliderMain />

    <section class="py-3 py-md-4 py-lg-5 my-5">
      <b-container>
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
              <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam dicta dolorem omnis ipsa tenetur nesciunt at possimus debitis ea!</b-card-text>
              <p class="text-right"><b-button variant="outline-light">Voire plus</b-button></p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="b-text py-3 py-md-4 py-lg-5 mt-5 text-center bg-dark">
      <b-container>
        <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellendus, aut quam ad quos est enim, assumenda accusamus eligendi repellat at nostrum quas vel sapiente inventore unde a. Neque, dolorum?</em></p>
        <blockquote class="blockquote-footer text-left">Lorem ipsum dolor sit amet.</blockquote>
      </b-container>
    </section>

    <section class="py-3 py-md-4 py-lg-5">
      <b-container>
        <b-row>
          <b-col cols="12">
            <b-card class="text-center mb-5" title="Services" sub-title="the card title up the bulk of"></b-card> 
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>

          <b-col cols="12" md="6" lg="4" class="mb-3">
            <b-card img-src="../assets/galleries/images/slider/dog.jpg" img-top title="hello world">
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button variant="outline-light">Voir Plus</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-3 py-md-4 py-lg-5 bg-wood">
      <b-container>
        <b-row>
          <b-col cols="12">
            <b-card class="text-center mb-5" title="Services" sub-title="the card title up the bulk of"></b-card> 
          </b-col>

          <b-col cols="12" md="4">
            <b-card class="border-ridge">
              <b-img src="../assets/galleries/images/slider/dog.jpg" fluid></b-img>
            </b-card>
            <b-card class="" title="Dog">
              <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente officiis eligendi?</b-card-text>
            </b-card>
          </b-col>

          <b-col cols="12" md="8">
            <b-card class="border-ridge">
              <b-img src="../assets/galleries/images/slider/city.jpg" fluid></b-img>
            </b-card>
            <b-card class="" title="City">
              <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente officiis eligendi?</b-card-text>
            </b-card>
          </b-col>

          <b-col cols="12" md="8">
            <b-card class="border-ridge">
              <b-img src="../assets/galleries/images/slider/girl.jpg" fluid></b-img>
            </b-card>
            <b-card class="" title="Girl">
              <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente officiis eligendi?</b-card-text>
            </b-card>
          </b-col>

            <b-col cols="12" md="4">
              <b-card class="border-ridge">
                <b-img src="../assets/galleries/images/slider/baby.jpg" fluid></b-img>
              </b-card>
              <b-card class="" title="Baby">
                <b-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente officiis eligendi?</b-card-text>
              </b-card>
            </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

import SliderMain from '@/components/SliderMain.vue'

export default {
  name: 'Home',
  components: {
    SliderMain,
  }
}

</script>
