<template>
	<div class="bravo1">
		<h2>menu one view</h2>
		<div><a @click="buttonClick" href="www.google.com">Link</a></div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			name: "ara",
		};
	},

	methods: {
		buttonClick(event) {
			if (event.target.closest(".bravo")) {
				console.log("good to go");
			} else {
				console.log("NOP");
			}
			event.preventDefault();
		},
	},
};
</script>
