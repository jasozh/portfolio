<script>
  import { Project, Hobby, Footer, Navbar } from "$lib";
  import { projects, hobbies } from "$lib/data";
  import { scrollAnimate } from "$lib/script";
  import { onMount } from "svelte";

  onMount(() => {
    window.onscroll = function () {
      scrollAnimate();
    };
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="img/logo-circle.png" />
  <title>Jason Zheng</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/style.css" />

  <!-- JS -->
  <script src="js/bootstrap.bundle.min.js"></script>
</svelte:head>

<!-- Body -->

<body data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="50">
  <!-- Header  -->
  <Navbar />

  <!-- Main content -->
  <main>
    <!-- Home page -->
    <article id="home">
      <div
        class="home-content d-flex flex-column min-vh-100 justify-content-center align-items-center"
      >
        <div class="py-5"></div>

        <!-- Profile picture and title text -->
        <img class="profile" src="img/profile/profile2.png" />
        <h1 class="title-text px-2 py-4 display-4">
          <b>My name is Jason Zheng</b>
        </h1>
        <h3 class="subtitle-text px-2 py-4">And welcome to my website</h3>

        <!-- Button group -->
        <div class="row button-group">
          <div class="col-lg py-1">
            <a
              href="#about"
              type="button"
              class="transparent btn btn-primary btn-block w-100">About me</a
            >
          </div>
          <div class="col-lg py-1">
            <a
              href="#contact"
              type="button"
              class="transparent btn btn-primary btn-block w-100">Contact me</a
            >
          </div>
          <div class="col-lg py-1">
            <a
              href="#projects"
              type="button"
              class="transparent btn btn-primary btn-block w-100"
              >See my projects</a
            >
          </div>
          <div class="col-lg py-1">
            <a
              href="#hobbies"
              type="button"
              class="transparent btn btn-primary btn-block w-100"
              >See my hobbies</a
            >
          </div>
        </div>

        <div class="py-5"></div>
      </div>
    </article>

    <!-- About page -->
    <article id="about">
      <div class="content container">
        <!-- Title -->
        <h1 class="display-4 pb-5 text-center">
          <b class="pb-2 divider-not-animated">About Me</b>
        </h1>

        <div
          class="row flex-row-reverse justify-content-center align-items-center"
        >
          <!-- Picture -->
          <div class="col-8 col-md-5">
            <img
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#profile-full"
              class="right-not-animated profile-full img-fluid"
              src="img/profile/profile2-full.jpg"
            />

            <div
              class="modal fade"
              id="profile-full"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <img src="img/profile/profile2-full.jpg" />
                </div>
              </div>
            </div>
          </div>

          <!-- Spacer column -->
          <div class="col-md-1"></div>

          <!-- Text body -->
          <div class="col-md-6 pt-3">
            <p>
              Hello! I am an undergraduate student at Cornell University
              majoring in Computer Science, and I will be graduating in 2025
              from the College of Arts & Sciences.
            </p>

            <p>
              I have been building web applications for over five years, and I
              have experience with full stack web development for LAMP and MERN
              stacks. Besides programming, I'm also interested in Linux,
              open-source software, music, and history.
            </p>

            <p>
              In my free time, I enjoy running, performing in an orchestra, and
              listening to podcasts. I also love browsing random Wikipedia
              articles, playing obscure video games, composing music, and
              writing short stories.
            </p>

            <p>My resume is available <a href="docs/Resume.pdf">here</a>.</p>
          </div>
        </div>
      </div>
    </article>

    <!-- Contact page -->
    <article id="contact" class="alternate">
      <div
        class="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      >
        <!-- Title -->
        <h1 class="display-4 pb-5 text-center">
          <b class="pb-2 divider-not-animated">Contact</b>
        </h1>

        <!-- Text body -->
        <div>
          You can find me on the Internet here:
          <ul>
            <li><a href="https://github.com/jasozh/">GitHub</a></li>
            <li>
              <a href="https://www.linkedin.com/in/jason-zheng-07a4a5223/"
                >LinkedIn</a
              >
            </li>
            <li>
              <a href="https://cornell.joinhandshake.com/users/33101352"
                >Handshake</a
              >
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCpDZ0IkIDqkXK8ZTJfTx2sA"
                >YouTube</a
              >
            </li>
            <li>
              <a href="https://musescore.com/user/38882263">MuseScore</a>
            </li>
          </ul>

          <p>
            You can contact me at <a
              href="mailto:jqz4@cornell.edu?subject=Email from jasozh.github.io"
              >jqz4@cornell.edu</a
            >.
          </p>
        </div>
      </div>
    </article>

    <!-- Projects page -->
    <article id="projects">
      <div class="content container">
        <!-- Title -->
        <h1 class="display-4 text-center">
          <b class="pb-2 divider-not-animated">Projects</b>
        </h1>

        <!-- Spacers -->
        <div class="pb-5"></div>
        <div class="pb-5"></div>

        <!-- PROJECT COMPONENTS LOADED HERE -->
        {#each projects as project}
          <Project
            id={project.id}
            title={project.title}
            logo={project.logo}
            screenshot={project.screenshot}
            body={project.body}
          />
        {/each}
      </div>
    </article>

    <!-- Hobbies page -->
    <article id="hobbies" class="alternate">
      <div class="content container">
        <!-- Title -->
        <h1 class="display-4 text-center">
          <b class="pb-2 divider-not-animated">Hobbies</b>
        </h1>

        <!-- Spacers -->
        <div class="pb-5"></div>
        <div class="pb-5"></div>

        <!-- HOBBY COMPONENTS LOADED HERE -->
        {#each hobbies as hobby}
          <Hobby
            id={hobby.id}
            title={hobby.title}
            screenshot={hobby.screenshot}
            body={hobby.body}
          />
        {/each}
      </div>
    </article>

    <!-- Additional pages -->
    <!-- <article id="hobbies">
      <div class="content container">
        <h4>Hobbies</h4>
        Hi
      </div>
    </article> -->
  </main>

  <!-- Footer -->
  <Footer>&copy; 2024 Jason Zheng. All rights reserved.</Footer>
</body>
