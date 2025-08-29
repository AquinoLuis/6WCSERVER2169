<template>
  <div>
    <nav class="navbar is-light" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item"><strong>Luis Aquino — Portfolio</strong></a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" @click.prevent="section='profile'">Profile</a>
          <a class="navbar-item" @click.prevent="section='education'">Education</a>
          <a class="navbar-item" @click.prevent="section='skills'">Skills & Projects</a>
        </div>
      </div>
    </nav>

    <Profile v-if="section==='profile'" @goto="section=$event" />
    <Education v-else-if="section==='education'" />
    <Skills v-else />
  </div>
</template>

<script>
import Profile from './Profile.vue'
import Education from './Education.vue'
import Skills from './Skills.vue'


export default {
  name: 'App',
  components: { Profile, Education, Skills },
  data() { return { section: 'profile' } }
}
</script>
