<script lang="ts">
  export let id: string;
</script>

<div class="modal fade" {id} tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content modal-content-img">
      <div class="text-center">
        <!-- CHILDREN LOADED HERE -->
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .modal-content-img {
    border: 0;
    background: transparent;
  }
</style>
