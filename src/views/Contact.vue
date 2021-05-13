<template>
    <div class="contact">
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
                
                <b-col md="6">
                    <b-card class="" title="Rediger un message">
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group
                              id="input-group-1"
                              label="Email address:"
                              label-for="input-1"
                              description="We'll never share your email with anyone else."
                            >
                              <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Enter email"
                                required
                              ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                              <b-form-input
                                id="input-2"
                                v-model="form.name"
                                placeholder="Enter name"
                                required
                              ></b-form-input>
                            </b-form-group>

                            <b-form-group
                              label="Textarea with formatter (on input)"
                              label-for="textarea-formatter"
                              description="We will convert your text to lowercase instantly"
                              class="mb-0"
                            >
                              <b-form-textarea
                                id="textarea-formatter"
                                v-model="form.content"
                                placeholder="Enter your text"
                                :formatter="formatter"
                              ></b-form-textarea>
                            </b-form-group>

                            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                              <b-form-checkbox-group
                                v-model="form.checked"
                                id="checkboxes-4"
                                :aria-describedby="ariaDescribedby"
                              >
                                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                              </b-form-checkbox-group>
                            </b-form-group>

                            <b-button type="submit" variant="success">Submit</b-button>
                            <b-button type="reset" variant="outline-light">Reset</b-button>
                          </b-form>
                    </b-card>
                </b-col>

                <b-col md="6">
                  <b-card title="Adresse" class="">
                    <b-card-text class="mb-0">L'Avenue des Champs Elysées </b-card-text>
                    <b-card-text>75008, Paris</b-card-text>
                  </b-card>

                  <b-card title="Adresse mail" class="">
                    <b-link href="#" class="card-link d-block">
                      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }"/> m.najafy@hotmail.com
                    </b-link>

                    <b-link href="#" class="card-link d-block ml-0">
                      <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'phone' }"/> 0666666666
                    </b-link>
                  </b-card>

                  <b-card  title="les reseaux social" sub-title="suivez nous sur les médias sociaux" class="sidebar-card">
                    <b-button-group>
                      <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></b-button>
                      <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></b-button>
                      <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></b-button>
                      <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></b-button>
                      <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/></b-button>
                    </b-button-group>
                  </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'Contact',
    components: {
      
    },
    data: () => {
      return {
        form: {
          name: '',
          email: '',
          content: null,
          checked: []
        },
        show: true,
        items: [
            {
                text: 'Home',
                href: '#/'
            },
            {
                text: 'Contact',
                href: true
            }
        ]
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.email = ''
        this.form.content = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>