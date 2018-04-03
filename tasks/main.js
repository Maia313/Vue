Vue.component('task-list', {

    template:`<div>
        <task v-for="task in tasks">{{ task.task }}</task>
        </div>`,

    data(){
        return{
            tasks:[

                { task:'Go to the store', complete:true },
                { task:'Exercise', complete:true },
                { task:'Learn React', complete:false },
                { task:'Create', complete:false },
                { task:'Draw some sketches', complete:true }

            ]
        }
    }
});


Vue.component('task', {

    template:'<li><slot></slot></li>'
});


new Vue({
    el:'#root'

});