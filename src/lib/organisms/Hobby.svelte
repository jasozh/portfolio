<script lang="ts">
  export let id: string;
  export let title: string;
  export let screenshot: string;
  export let body: string;
</script>

<div>
  <h1 class="mobile-text text-center text-md-start">{title}</h1>
  <div class="row flex-row justify-content-center align-items-center">
    <!-- Screenshot and modal -->
    <div class="col-md-6">
      <img
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#{id}"
        class="left-not-animated hobby-picture shadow-sm img-thumbnail img-fluid"
        src={screenshot}
      />

      <div class="modal fade" {id} tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <img src={screenshot} />
          </div>
        </div>
      </div>
    </div>

    <!-- Text body -->
    <div class="col-md-6 pt-3">
      <h1 class="desktop-text pb-3 text-center text-md-start">
        {title}
      </h1>
      <p>{body}</p>
    </div>

    <!-- Spacers -->
    <div class="pb-5"></div>
    <div class="pb-5"></div>
  </div>
</div>

<style>
  /* styles go here */
</style>
