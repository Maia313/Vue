# Vue

* **Vue instance**
```diff
! Vue2
```

```js
const app = new Vue({
  /* options */
})

const vm = app.$mount('#app')
```
[See vue instance properties](https://vuejs.org/v2/api/#Instance-Properties)

```diff
+ Vue3
```

```js
const RootComponent = {
  /* options */
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```
---
* **Attribute binding**

```diff
! Vue2
```

```diff
+ Vue3
```

```html
<img v-bind:src="imageSrc">
<a :href="https://github.com/Maia313"
```
---
* **Conditional rendering**

```diff
! Vue2
```

```diff
+ Vue3
```
```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  Not A/B
</div>

<h1 v-show="ok">Hello!</h1>
```

---
* **List rendering**
```html
<div v-for="item in list" :ref="setItemRef"></div>
```

```diff
! Vue2
```
```js
export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
```
```diff
+ Vue3
```
```js
import { onBeforeUpdate, onUpdated } from 'vue'

export default {
  setup() {
    let itemRefs = []
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })
    return {
      setItemRef
    }
  }
}

```
---
* **Event handling**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Computed properties**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Components**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Lifecycle methods**
```diff
! Vue2
```

```diff
+ Vue3
```
The following table contains how the lifecycle hooks are invoked inside of setup():
Options API |	Hook inside setup
beforeCreate |	Not needed*
created |	Not needed*
beforeMount |	onBeforeMount
mounted |	onMounted
beforeUpdate | onBeforeUpdate
updated |	onUpdated
beforeUnmount |	onBeforeUnmount
unmounted |	onUnmounted
errorCaptured |	onErrorCaptured
renderTracked |	onRenderTracked
renderTriggered |	onRenderTriggered
activated |	onActivated
deactivated |	onDeactivated

---
* **Communicating events**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Forms and v-model**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Routing**

```diff
! Vue2
```

```diff
+ Vue3
```
---
* **Vuex**

```diff
! Vue2
```

```diff
+ Vue3
```
---

> Modal example

> HTML
```html
<!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
<!-- app -->
<div id="app">
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>
</div>
```

> Javascript

```js
// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})
```
> CSS

```css
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
```
