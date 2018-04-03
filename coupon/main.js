window.Event = new Vue();

Vue.component('coupon', {

	template: `
		<div>
			<input type="text" placeholder="enter coupon code">
			<button @click="onCouponApplied">apply coupon</button>
		</div>
	`,

	methods: {
		onCouponApplied: function(){
			Event.$emit('applied');
		}
	}

});

new Vue({

	el: '#root',

	data: {
		couponApplied: false
	},

	created(){
		Event.$on('applied', function(){
			alert('handling it');
		});
	}

});