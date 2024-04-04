<script lang="ts">
  import { SectionHeader } from "$lib";

  export let id: string;
  export let title: string;
  export let color: "gray" | "white" = "white";
</script>

<article {id} class={color === "gray" ? "alternate" : ""}>
  <div
    class="d-flex flex-column min-vh-100 justify-content-center align-items-center"
  >
    <!-- Title -->
    <SectionHeader>{title}</SectionHeader>

    <!-- CHILDREN LOADED HERE -->
    <div class="pt-5">
      <slot />
    </div>
  </div>
</article>

<style>
  /* Alternate article background */
  article.alternate {
    background: #f5f5f5;
  }
</style>
