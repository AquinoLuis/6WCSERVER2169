const books = Vue.createApp({
    
    data(){
        return {
            showBooks: true,
            btitle: 'The Coder',
            bauthor: 'Aquino, Luis Gabriel',
            year: 2004
        }
    },
    methods:{
        toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
}
}
);
books.mount('#books')