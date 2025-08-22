// const app = Vue.createApp({
//     // Create functions, data
//     template: "<h2>This is my template...</h2>"
// });

// app.mount('#app');

const app = Vue.createApp({
  // Create functions, data
  data() {
    return {
      title: 'The Coder',
      author: 'Aquino, Luis Gabriel',
      age: 34
    };
  }
});

app.mount('#app');


