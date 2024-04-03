<script lang="ts">
  export let id: string;
  export let title: string;
  export let logo: string;
  export let screenshot: string;
  export let body: string;
</script>

<div>
  <div class="project-header mobile-text" style="justify-content: center;">
    <img class="project-logo" src={logo} />
    <h1 class="project-heading">{title}</h1>
  </div>
  <div class="row flex-row-reverse justify-content-center align-items-center">
    <!-- Screenshot and modal -->
    <div class="col-md-6">
      <img
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#{id}"
        class="right-not-animated img-fluid"
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
      <div class="project-header desktop-text pb-3">
        <img class="project-logo" src={logo} />
        <h1 class="project-heading">{title}</h1>
      </div>
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
