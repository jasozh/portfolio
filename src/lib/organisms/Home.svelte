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
      class="transparent btn btn-primary btn-block w-100">See my projects</a
    >
  </div>
  <div class="col-lg py-1">
    <a
      href="#hobbies"
      type="button"
      class="transparent btn btn-primary btn-block w-100">See my hobbies</a
    >
  </div>
</div>

<style>
  /* Ensures that the main button group on Home is responsive */
  @media screen and (max-width: 991px) {
    .button-group {
      margin-left: 100px;
      margin-right: 100px;
    }
  }

  @media screen and (min-width: 992px) {
    .button-group {
      min-width: 700px;
    }
  }

  /* Make buttons slightly transparent until hover */
  .transparent {
    opacity: 0.75;
  }

  .transparent:hover {
    opacity: 1;
  }

  /* Profile picture styling and animations */
  img.profile {
    border-radius: 50%;
    max-height: 300px;
    max-width: 50%;
    cursor: pointer;
    animation-name: profile-animation;
    animation-duration: 1s;
  }

  img.profile:active {
    transform: scale(0.8, 0.8) rotate(10deg);
  }

  /* Title and subtitle text animations */
  @keyframes profile-animation {
    0% {
      transform: scale(0.7, 0.7);
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }

  .title-text {
    animation-name: title-animation;
    animation-duration: 1s;
  }

  @keyframes title-animation {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .subtitle-text {
    animation-name: subtitle-animation;
    animation-duration: 1.25s;
  }

  @keyframes subtitle-animation {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  /* Button group animations */
  .button-group {
    animation-name: button-animation;
    animation-duration: 2s;
  }

  @keyframes button-animation {
    0% {
      opacity: 0;
      transform: translate(0px, 100px);
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
