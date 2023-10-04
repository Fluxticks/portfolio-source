<script>
	/**
	 * @type {any}
	 */
	export let scrollBinding;
</script>

<div
	class="mouse-container"
	on:click={scrollBinding}
	on:keypress={scrollBinding}
	role="button"
	tabindex="0"
>
	<div class="mouse">
		<div class="wheel" />
	</div>
	<div class="arrow-container">
		<span class="arrow top" />
		<span class="arrow middle" />
		<span class="arrow bottom" />
	</div>
</div>

<style>
	.mouse-container {
		display: block;
		align-items: center;
		width: 50px;
		height: 50px;
		margin: 10px;
		cursor: pointer;
		pointer-events: all;
		z-index: 10;
	}

	.arrow {
		display: block;
		transform: rotate(45deg);

		border-right: 2px solid var(--pink);
		border-bottom: 2px solid var(--pink);
		margin-bottom: 3px;
		margin-left: 4px;

		width: 16px;
		height: 16px;

		animation: arrow-scroll 1s infinite alternate;
	}

	.arrow-container > .top {
		margin-top: 1px;
		animation-delay: 0.1s;
	}

	.arrow-container > .middle {
		animation-delay: 0.2s;
		margin-top: 6px;
	}

	.arrow-container > .bottom {
		animation-delay: 0.3s;
		margin-top: 6px;
	}

	@keyframes arrow-scroll {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	.mouse {
		position: relative;
		height: 42px;
		width: 24px;
		border-radius: 14px;
		transform: none;
		border: 2px solid var(--pink);
		/* top: 170px; */
	}

	.wheel {
		position: relative;
		display: block;
		margin: 5px auto;
		background: var(--pink);

		width: 4px;
		height: 4px;
		border: 2px solid var(--pink);
		border-radius: 8px;
		animation: wheel-bounce 0.9s ease-in-out infinite;
	}

	@keyframes wheel-bounce {
		0% {
			top: 1px;
		}
		25% {
			top: 2px;
		}
		50% {
			top: 3px;
		}
		75% {
			top: 2px;
		}
		100% {
			top: 1px;
		}
	}
</style>
