const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Eat Lunch'},
                { text: 'Go to gym'},
                { text: 'Solve one code a day' },
                { text: 'Sleep early'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')