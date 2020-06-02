<template>
	<div class="main-container">
		<hr />
		<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
			<div class="flex flex-shrink-0">
				<img
					class="h-12 w-17
                    "
					src="../../assets/images/chat.png"
					alt="ChitChat Logo"
				/>
			</div>
			<div class="ml-6 pt-1">
				<h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
				<router-link to="/dashboard">
					<p class="text-base text-gray-600 leading-normal">
						You have a new message!
					</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.main-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
}
</style>
