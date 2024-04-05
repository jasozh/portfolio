<script lang="ts">
  export let id: string;
  export let title: string;
  export let screenshot: string;
  export let body: string;

  // import { Modal } from "$lib";
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

<h2 class="mobile-text hobby-header tw-text-center sm:tw-text-start">
  {title}
</h2>
<div
  class="tw-flex tw-flex-col tw-items-center tw-justify-center sm:tw-grid sm:tw-grid-cols-12"
>
  <!-- Screenshot and modal -->
  <div class="sm:tw-col-span-6">
    <img
      bind:this={element}
      data-bs-toggle="modal"
      data-bs-target="#{id}"
      class="left-not-animated tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-md"
      class:left-animated={startAnimation}
      src={screenshot}
      alt="hobby"
    />
    <!-- <Modal {id}><img src={screenshot} class="img-modal" alt="hobby" /></Modal> -->
  </div>

  <!-- Text body -->
  <div class="tw-pt-5 sm:tw-col-span-6 sm:tw-ml-10 sm:tw-pt-0">
    <h2 class="desktop-text tw-pb-6 tw-text-center sm:tw-text-start">
      {title}
    </h2>
    <p>{@html body}</p>
  </div>
</div>

<style>
  .hobby-header {
    margin-bottom: 15px;
  }

  /* Styling for hobby pictures */
  img.img-button {
    cursor: pointer;
  }

  img.img-modal {
    max-width: 100%;
  }

  /* Hide/show text when on mobile/desktop */
  @media screen and (max-width: 767px) {
    .mobile-text {
      display: default;
    }

    .desktop-text {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .mobile-text {
      display: none;
    }

    .desktop-text {
      display: default;
    }
  }

  /* Animation classes for animating images when scrolled from left into view */
  .left-not-animated {
    visibility: hidden;
  }

  .left-animated {
    visibility: visible;
    animation-name: left-animated-animation;
    animation-duration: 1s;
  }

  @keyframes left-animated-animation {
    0% {
      opacity: 0;
      transform: translate(-500px, 0px);
    }
  }
</style>
