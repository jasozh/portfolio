<script lang="ts">
  import {
    Project,
    Hobby,
    Footer,
    Navbar,
    Home,
    About,
    Contact,
    SectionTemplate,
    CenterTemplate,
    HomeTemplate,
  } from "$lib";
  import { projects, hobbies } from "$lib/data";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="{base}/img/logo-circle.png" />
  <title>Jason Zheng</title>

  <!-- CSS -->
  <link rel="stylesheet" href="{base}/css/bootstrap.min.css" />
  <link rel="stylesheet" href="{base}/css/style.css" />

  <!-- JS -->
  <script src="{base}/js/bootstrap.bundle.min.js"></script>
</svelte:head>

<!-- Body -->

<div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="50">
  <!-- Header  -->
  <Navbar id="navbar" />

  <!-- Main content -->
  <main>
    <!-- Home page -->
    <HomeTemplate id="home"><Home /></HomeTemplate>

    <!-- About page -->
    <SectionTemplate id="about" title="About Me">
      <About />
    </SectionTemplate>

    <!-- Contact page -->
    <CenterTemplate id="contact" title="Contact" color="gray">
      <Contact />
    </CenterTemplate>

    <!-- Projects page -->
    <SectionTemplate id="projects" title="Projects">
      {#each projects as project, i}
        <div>
          <Project
            id={project.id}
            title={project.title}
            logo={project.logo}
            screenshot={project.screenshot}
            body={project.body}
          />

          {#if i < projects.length - 1}
            <!-- Spacers -->
            <div class="pb-5"></div>
            <div class="pb-5"></div>
          {/if}
        </div>
      {/each}
    </SectionTemplate>

    <!-- Hobbies page -->
    <SectionTemplate id="hobbies" title="Hobbies" color="gray">
      {#each hobbies as hobby, i}
        <div>
          <Hobby
            id={hobby.id}
            title={hobby.title}
            screenshot={hobby.screenshot}
            body={hobby.body}
          />

          {#if i < hobbies.length - 1}
            <!-- Spacers -->
            <div class="pb-5"></div>
            <div class="pb-5"></div>
          {/if}
        </div>
      {/each}
    </SectionTemplate>
  </main>

  <!-- Footer -->
  <Footer>&copy; 2024 Jason Zheng. All rights reserved.</Footer>
</div>
