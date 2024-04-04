<script lang="ts">
  export let id: string;
  export let title: string;
  export let screenshot: string;
  export let body: string;

  import { Modal } from "$lib";
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

<h1 class="mobile-text text-center text-md-start">{title}</h1>
<div class="row flex-row justify-content-center align-items-center">
  <!-- Screenshot and modal -->
  <div class="col-md-6">
    <img
      bind:this={element}
      data-bs-toggle="modal"
      data-bs-target="#{id}"
      class="left-not-animated hobby-picture shadow-sm img-thumbnail img-fluid img-button"
      class:left-animated={startAnimation}
      src={screenshot}
      alt="hobby"
    />

    <Modal {id}><img src={screenshot} alt="hobby" /></Modal>
  </div>

  <!-- Text body -->
  <div class="col-md-6 pt-3">
    <h1 class="desktop-text pb-3 text-center text-md-start">
      {title}
    </h1>
    <p>{@html body}</p>
  </div>
</div>

<style>
  /* Styling for hobby pictures */
  img.hobby-picture {
    border-radius: 5%;
  }

  img.img-button {
    cursor: pointer;
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
