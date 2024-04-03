<div class="row flex-row-reverse justify-content-center align-items-center">
  <!-- Picture -->
  <div class="col-8 col-md-5">
    <img
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#profile-full"
      class="right-not-animated profile-full img-fluid"
      src="img/profile/profile2-full.jpg"
    />

    <div class="modal fade" id="profile-full" tabindex="-1" aria-hidden="true">
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
      Hello! I am an undergraduate student at Cornell University majoring in
      Computer Science, and I will be graduating in 2025 from the College of
      Arts & Sciences.
    </p>

    <p>
      I have been building web applications for over five years, and I have
      experience with full stack web development for LAMP and MERN stacks.
      Besides programming, I'm also interested in Linux, open-source software,
      music, and history.
    </p>

    <p>
      In my free time, I enjoy running, performing in an orchestra, and
      listening to podcasts. I also love browsing random Wikipedia articles,
      playing obscure video games, composing music, and writing short stories.
    </p>

    <p>My resume is available <a href="docs/Resume.pdf">here</a>.</p>
  </div>
</div>

<style>
  /* Styling for profile picture */
  img.profile-full {
    border-radius: 10%;
  }
</style>
