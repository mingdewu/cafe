Vue.createApp({
    data:function(){
        return {
            todoTitle:'',
            todoDescription:'',
            searchWord:'',
            todoCategories:[],
            hideDoneTodo:true,
            order:'desc',
            categoryName:'',
            selectedCategory:'',
            todos:[],
            categories:[],
        }
    },
    computed:{
        function(){
            return this.todoTitle !== ''
        },
        canCreateCategory:function(){
            return this.categoryName !=='' && !this.existsCategory
        },
        existsCategory:function(){
            const categoryName = this.categoryName
            return this.categories.indexOf(categoryName) !== -1
        },
        hasTodos:function(){
            return this.todos.length > 0
        },
    },
    methods:{
        createTodo:function(){
            if(!this.canCreateTodo){
                return
            }

            this.todos.push({
                id:'todo-' + Date.now(),
                title:this.todoTitle,
                description:this.todoDescription,
                categories:this.todoCategories,
                dateTime:Date.now(),
                done:false,
            })
            this.todotitle =''
            this.todoDescription=''
            this.todoCategories = []
        },
        createCategory:function(){
            if(!this.canCreateCategory){
                return
            }
            this.categories.push(this.categoryName)
            this.categoryName = ''
        },
        created:function(){
         const todos = window.localStoege.getItem('todos')
         const categories = window.localStorage .getItem('categories')
         
         if(todos){
            this.todos = JSON.parse(todos)
        }

        if(categories){
            this.categories=JSON.parse(categories)
        }
        }
    },
    watch:{
        todo:{
            handler:function(next){
                window.localStorage.setItem('todo',JSON.stringify(next))
            },
            deep:true,
        },
        categories:{
            handler:function(next){
                window.localStorage.setItem('categories',JSON.stringify(next))
            },
            deep:true,
        },
    },
}).mount('#app')