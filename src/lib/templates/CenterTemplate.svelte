<script lang="ts">
  import { SectionHeader } from "$lib";

  export let id: string;
  export let title: string;
  export let color: "gray" | "white" = "white";
</script>

<article {id} class={color === "gray" ? "alternate" : ""}>
  <div
    class="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center"
  >
    <!-- Title -->
    <SectionHeader>{title}</SectionHeader>

    <!-- CHILDREN LOADED HERE -->
    <div class="tw-pt-12">
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
