Vue.component('message',{

    props:['title', 'body'],

    data(){
        return{
            isVisible:true
        };
    },

    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}


            <button type="button" @click="hideModal">X</button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>       
    `,

    methods:{
        hideModal(){
            this.isVisible = false;
        }
    }
});

Vue.component('modal',{

    template:` <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
           <div class="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
        </div>
        <button class="modal-close is-large" @click="$emit('close')"></button>
        </div>`
});

new Vue({
    el:'#root',
    data: {
        showModal:false
    }

});