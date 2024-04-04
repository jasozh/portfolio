<script lang="ts">
  import { SectionHeader } from "$lib";

  export let id: string;
  export let title: string;
  export let color: "gray" | "white" = "white";
</script>

<article {id} class={color === "gray" ? "alternate" : ""}>
  <div class="content container">
    <!-- Title -->
    <SectionHeader>{title}</SectionHeader>

    <!-- Spacers -->
    <div class="pb-5"></div>
    <div class="pb-5"></div>

    <!-- CHILDREN LOADED HERE -->
    <slot />
  </div>
</article>

<style>
  @import "$lib/bootstrap.min.css";

  /* Styling for all page contents */
  .content {
    padding: 100px 20px 100px 20px;
    min-height: 100vh;
    max-width: 1100px;
    margin: auto;
  }

  /* Alternate article background */
  article.alternate {
    background: #f5f5f5;
  }
</style>
