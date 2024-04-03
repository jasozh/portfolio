<script lang="ts">
  export let id: string;
  export let title: string;
  export let logo: string;
  export let screenshot: string;
  export let body: string;

  import { Modal } from "$lib";
</script>

<div class="project-header mobile-text" style="justify-content: center;">
  <img class="project-logo" src={logo} alt="project" />
  <h1 class="project-heading">{title}</h1>
</div>
<div class="row flex-row-reverse justify-content-center align-items-center">
  <!-- Screenshot and modal -->
  <div class="col-md-6">
    <img
      data-bs-toggle="modal"
      data-bs-target="#{id}"
      class="right-not-animated img-fluid"
      src={screenshot}
      alt="project"
    />

    <Modal {id}><img src={screenshot} alt="project" /></Modal>
  </div>

  <!-- Text body -->
  <div class="col-md-6 pt-3">
    <div class="project-header desktop-text pb-3">
      <img class="project-logo" src={logo} alt="project logo" />
      <h1 class="project-heading">{title}</h1>
    </div>
    <p>{@html body}</p>
  </div>
</div>

<style>
  img.project-logo {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  h1.project-heading {
    margin-bottom: 0;
  }
</style>
