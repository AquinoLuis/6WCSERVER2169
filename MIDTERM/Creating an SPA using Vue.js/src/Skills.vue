<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-3"><i class="fa fa-cogs"></i> Skills</h2>

      <div class="columns is-multiline">
        <div class="column is-4">
          <div class="box">
            <p class="title is-5">Core</p>
            <ul class="content">
              <li>JavaScript (ES6+)</li>
              <li>HTML5, CSS3</li>
              <li>Responsive Layouts</li>
            </ul>
          </div>
        </div>

        <div class="column is-4">
          <div class="box">
            <p class="title is-5">Frameworks & Tools</p>
            <ul class="content">
              <li>Vue 3 + Vite</li>
              <li>Bootstrap, Bulma</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>

        <div class="column is-4">
          <div class="box">
            <p class="title is-5">Currently Learning</p>
            <ul class="content">
              <li>Routing & Component Patterns</li>
              <li>APIs & Fetch</li>
              <li>State basics (Pinia later)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="title is-4 mt-5"><i class="fa fa-folder-open"></i> Sample Projects</h3>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title is-5">JS Todo (LocalStorage)</p>
              <p class="subtitle is-6">Vanilla JS + DOM</p>
              <p>Simple CRUD todo list saved in the browser.</p>
              <a href="#" target="_blank" class="button is-small is-link is-light">Repo</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title is-5">Vue Counter</p>
              <p class="subtitle is-6">Vue 3 + Composition</p>
              <p>Counter with increment/decrement and reset.</p>
              <a href="#" target="_blank" class="button is-small is-link is-light">Repo</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default { name: 'Skills' }
</script>
