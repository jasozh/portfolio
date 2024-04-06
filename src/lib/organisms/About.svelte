<script lang="ts">
  // import { Modal } from "$lib";
  import { isInViewport } from "$lib/helpers";
  import { onMount } from "svelte";
  import { base } from "$app/paths";

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

<!-- <div class="row flex-row-reverse justify-content-center align-items-center"> -->
<div
  class="tw-flex tw-flex-col-reverse tw-items-center tw-justify-center sm:tw-grid sm:tw-grid-cols-12"
>
  <!-- Text body -->
  <div class="tw-pt-5 sm:tw-col-span-6 sm:tw-pt-0">
    <p>
      Hello! I am an undergraduate student at Cornell University majoring in
      Computer Science, and I will be graduating in 2025 from the College of
      Arts & Sciences.
    </p>

    <p>
      I have been building web applications for over five years, and I have
      experience with full stack web development for LAMP and MERN stacks.
      Besides programming, I'm also interested in Linux, open-source software,
      music, and history.
    </p>

    <p>
      In my free time, I enjoy running, performing in an orchestra, and
      listening to podcasts. I also love browsing random Wikipedia articles,
      playing obscure video games, composing music, and writing short stories.
    </p>

    <p>My resume is available <a href="{base}/docs/Resume.pdf">here</a>.</p>
  </div>

  <!-- Spacer column -->
  <div class="sm:tw-col-span-1" />

  <!-- Picture -->
  <div class="sm:tw-col-span-5">
    <div class="tw-px-2">
      <img
        bind:this={element}
        class="right-not-animated tw-max-h-96 tw-rounded-3xl tw-shadow-md sm:tw-max-h-none"
        class:right-animated={startAnimation}
        src="{base}/img/profile/profile2-full.jpg"
        alt="profile"
      />
      <!-- <img
        bind:this={element}
        data-bs-toggle="modal"
        data-bs-target="#profile-full"
        class="right-not-animated tw-max-h-96 tw-rounded-3xl tw-shadow-md sm:tw-max-h-none"
        class:right-animated={startAnimation}
        src="{base}/img/profile/profile2-full.jpg"
        alt="profile"
      /> -->
    </div>
    <!-- <Modal id="profile-full"
      ><img
        src="{base}/img/profile/profile2-full.jpg"
        class="img-modal"
        alt="profile"
      /></Modal
    > -->
  </div>
</div>

<style>
  /* Styling for profile picture */
  img.img-modal {
    max-width: 100%;
  }

  img.img-button {
    cursor: pointer;
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
