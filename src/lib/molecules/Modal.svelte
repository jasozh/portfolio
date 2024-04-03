<script lang="ts">
  export let id: string;
</script>

<div class="modal fade" {id} tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <!-- CHILDREN LOADED HERE -->
      <slot />
    </div>
  </div>
</div>
