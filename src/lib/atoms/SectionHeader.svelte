<script lang="ts">
  import { isInViewport } from "$lib/helpers";
  import { onMount } from "svelte";

  /** Element ref of the divider, see the bind:this below */
  let element: Element;

  /** Whether the divider should start its animation */
  let startAnimation = false;

  onMount(() => {
    window.addEventListener("scroll", function () {
      if (isInViewport(element)) {
        startAnimation = true;
      }
    });
  });
</script>

<div class="tw-flex tw-justify-center">
  <h1
    bind:this={element}
    class:divider-animated={startAnimation}
    class="divider-not-animated tw-pb-4 tw-text-6xl"
  >
    <slot />
  </h1>
</div>

<style>
  /* Animation classes for animating dividers when scrolled into view */
  .divider-not-animated {
    background: none;
  }

  .divider-animated {
    animation-name: divider-animated-animation;
    animation-duration: 1s;
    background-image: linear-gradient(black, black);
    background-size: 100% 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
  }

  @keyframes divider-animated-animation {
    0% {
      background-size: 0 3px;
      background-position: 0 100%;
    }
  }

  /* Alternative strategy to animate dividers; keep commented */
  /* .divider-not-animated {
    visibility: hidden;
  }

  .divider-animated {
    width: 20%;
    height: 3px;
    background: black;
    animation-name: divider-animated-animation;
    animation-duration: 1s;
  }

  @keyframes divider-animated-animation {
    0% {
      width: 0;
    }
  } */
</style>
