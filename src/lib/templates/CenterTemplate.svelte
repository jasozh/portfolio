<script lang="ts">
  export let id: string;
  export let title: string;
  export let color: "gray" | "white" = "white";
</script>

<article {id} class={color === "gray" ? "alternate" : ""}>
  <div
    class="d-flex flex-column min-vh-100 justify-content-center align-items-center"
  >
    <!-- Title -->
    <h1 class="display-4 pb-5 text-center">
      <b class="pb-2 divider-not-animated">{title}</b>
    </h1>

    <!-- CHILDREN LOADED HERE -->
    <div>
      <slot />
    </div>
  </div>
</article>
