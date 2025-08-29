<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="columns is-vcentered">
          <div class="column is-narrow">
            <figure class="image is-128x128">
              <img class="is-rounded" src="https://i.imgur.com/2WZtOD8.png" alt="avatar">
            </figure>
          </div>
          <div class="column">
            <h1 class="title is-2">Luis Gabriel Aquino</h1>
            <p class="subtitle is-5">WD-301 • Web Developer (JS-focused)</p>
            <p>
              I’m a student web developer building clean, fast interfaces with
              <strong>JavaScript</strong> and <strong>Vue 3</strong>. Currently learning component-driven UIs and modern tooling.
            </p>
            <div class="mt-3">
              <a class="button is-link is-light" href="#" @click.prevent="$emit('goto','skills')">
                <i class="fa fa-code mr-2"></i> View Skills
              </a>
              <a class="button is-primary is-light" href="#" @click.prevent="$emit('goto','projects')">
                <i class="fa fa-folder-open mr-2"></i> View Projects
              </a>
            </div>
          </div>
        </div>

        <div class="columns mt-4">
          <div class="column">
            <p><strong>Email:</strong> youremail@example.com</p>
            <p><strong>Location:</strong> Angeles City, PH</p>
          </div>
          <div class="column">
            <p><strong>Links:</strong>
              <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a> •
              <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'Profile' }
</script>
