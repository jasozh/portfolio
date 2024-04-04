<script lang="ts">
  export let id: string;
</script>

<article {id}>
  <div
    class="home-content tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center"
  >
    <div class="tw-py-12"></div>

    <!-- CHILDREN LOADED HERE -->
    <slot />

    <div class="tw-py-12"></div>
  </div>
</article>

<style>
  /* Sets background image and pseudoelement for transparency */
  article#home {
    background-image: url("/img/background.png");
  }

  article#home::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(255, 255, 255, 0.25);
  }

  /* Ensures actual content is not affected by the transparent pseudolayer */
  .home-content {
    position: relative;
    text-align: center;
    backdrop-filter: blur(10px);
  }
</style>
