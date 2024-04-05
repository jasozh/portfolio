<script lang="ts">
  export let id: string;
  export let title: string;
  export let logo: string;
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

<div class="project-header mobile-text tw-justify-center">
  <img class="project-logo" src={logo} alt="project" />
  <h2 class="project-heading">{title}</h2>
</div>
<div
  class="tw-flex tw-flex-col-reverse tw-items-center tw-justify-center sm:tw-grid sm:tw-grid-cols-12"
>
  <!-- Text body -->
  <div class="tw-pt-5 sm:tw-col-span-6 sm:tw-pt-0">
    <div class="project-header desktop-text pb-3">
      <img class="project-logo" src={logo} alt="project logo" />
      <h2 class="project-heading">{title}</h2>
    </div>
    <p>{@html body}</p>
  </div>

  <!-- Screenshot and modal -->
  <div class="sm:tw-col-span-6 sm:tw-ml-10">
    <img
      bind:this={element}
      data-bs-toggle="modal"
      data-bs-target="#{id}"
      class="right-not-animated tw-rounded-xl tw-border tw-border-gray-200 tw-shadow-md"
      class:right-animated={startAnimation}
      src={screenshot}
      alt="project"
    />
    <!-- <Modal {id}><img src={screenshot} class="img-modal" alt="project" /></Modal> -->
  </div>
</div>

<style>
  img.img-modal {
    max-width: 100%;
  }

  img.project-logo {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  h1.project-heading {
    margin-bottom: 0;
  }

  img.img-button {
    cursor: pointer;
  }

  .project-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }

  /* Hide/show text when on mobile/desktop */
  @media screen and (max-width: 639px) {
    .mobile-text {
      display: default;
    }

    .desktop-text {
      display: none;
    }
  }

  @media screen and (min-width: 640px) {
    .mobile-text {
      display: none;
    }

    .desktop-text {
      display: default;
    }
  }

  /* Animation classes for animating images when scrolled from right into view */
  .right-not-animated {
    visibility: hidden;
  }

  .right-animated {
    visibility: visible;
    animation-name: right-animated-animation;
    animation-duration: 1s;
  }

  @keyframes right-animated-animation {
    0% {
      opacity: 0;
      transform: translate(500px, 0px);
    }
  }
</style>
