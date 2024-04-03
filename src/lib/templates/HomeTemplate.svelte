<script lang="ts">
  export let id: string;
</script>

<article {id}>
  <div
    class="home-content d-flex flex-column min-vh-100 justify-content-center align-items-center"
  >
    <div class="py-5"></div>

    <!-- CHILDREN LOADED HERE -->
    <slot />

    <div class="py-5"></div>
  </div>
</article>
