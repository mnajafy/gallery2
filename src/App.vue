<template>
  <div id="app">
    <header class="header">
      <b-navbar>
        <b-navbar-brand href="#">
          <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten"> -->
          Gallery<span>Mohammad</span>
        </b-navbar-brand>

        <b-button class="ml-auto" v-b-toggle.sidebar>
          <b-icon-list></b-icon-list>
        </b-button>
        
      </b-navbar>
    </header>
    
    <b-sidebar id="sidebar" title="Menu" text-variant="white" right shadow>
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <b-row>
            <b-col cols="12">
               © 2021 <strong class="mr-auto">Gallery </strong>by <b-link class="" size="sm">m.najafy </b-link>
            </b-col>
            <b-col cols="12">
              <b-link size="sm" ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/> Afficher sur GitHub</b-link>
            </b-col>
          </b-row>
        </div>
      </template>
      <!-- <h4 id="sidebar-no-header-title">Custom header sidebar</h4> -->
      <nav class="">
        <b-nav vertical>
          <b-nav-item to="/" active @click="hide">Accueil</b-nav-item>
          <b-nav-item to="/about" @click="hide">A propos</b-nav-item>
          <b-nav-item to="/contact" @click="hide">Contact</b-nav-item>
          <b-nav-item-dropdown text="services" toggle-class="nav-link-custom">
            <b-dropdown-item to="/services">Services</b-dropdown-item>
            <b-dropdown-item>error 404</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>page</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/gallery" @click="hide">Gallery</b-nav-item>
        </b-nav>
      </nav>
      <b-card  title="les reseaux social" sub-title="suivez nous sur les médias sociaux" class="sidebar-card">
        <b-button-group>
          <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></b-button>
          <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></b-button>
          <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></b-button>
          <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></b-button>
          <b-button><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/></b-button>
        </b-button-group>
      </b-card>
    </b-sidebar>

    <div class="container-main" :class="{ active: isActive}">
      <main class="main">
        <router-view/>
      </main>
      <div class="main-shadow-one"></div>
      <div class="main-shadow-two"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isActive: false
  }),
  props: {
    msg: String
  },
  components: {
    // HelloWorld
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (collapseId == 'sidebar') {
        this.isActive = isJustShown
      }
    })
  }
}
</script>