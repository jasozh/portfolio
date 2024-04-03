<script lang="ts">
  export let id: string;
  export let title: string;
  export let screenshot: string;
  export let body: string;

  import { Modal } from "$lib";
</script>

<h1 class="mobile-text text-center text-md-start">{title}</h1>
<div class="row flex-row justify-content-center align-items-center">
  <!-- Screenshot and modal -->
  <div class="col-md-6">
    <img
      data-bs-toggle="modal"
      data-bs-target="#{id}"
      class="left-not-animated hobby-picture shadow-sm img-thumbnail img-fluid"
      src={screenshot}
      alt="hobby"
    />

    <Modal {id}><img src={screenshot} alt="hobby" /></Modal>
  </div>

  <!-- Text body -->
  <div class="col-md-6 pt-3">
    <h1 class="desktop-text pb-3 text-center text-md-start">
      {title}
    </h1>
    <p>{body}</p>
  </div>
</div>

<style>
  /* Styling for hobby pictures */
  img.hobby-picture {
    border-radius: 5%;
  }
</style>
