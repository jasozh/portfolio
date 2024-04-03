<script lang="ts">
  export let id: string;
  export let title: string;
  export let color: "gray" | "white" = "white";
</script>

<article {id} class={color === "gray" ? "alternate" : ""}>
  <div class="content container">
    <!-- Title -->
    <h1 class="display-4 text-center">
      <b class="pb-2 divider-not-animated">{title}</b>
    </h1>

    <!-- Spacers -->
    <div class="pb-5"></div>
    <div class="pb-5"></div>

    <!-- CHILDREN LOADED HERE -->
    <slot />

    <!-- Spacers -->
    <div class="pb-5"></div>
    <div class="pb-5"></div>
  </div>
</article>

<style>
  /* Styling for all page contents */
  .content {
    padding: 100px 20px 20px 20px;
    min-height: 100vh;
    max-width: 1100px;
    margin: auto;
  }

  /* Alternate article background */
  article.alternate {
    background: #f0f2f5;
  }
</style>
