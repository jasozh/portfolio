<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  /** The id of the navbar */
  export let id: string;

  /** List of nav labels and links in order of display */
  export let navs: { label: string; link: string }[];

  /**
   * TODO: This is a temporary variable to prevent Svelte from removing "unused"
   * CSS styles. This should eventually be removed when you find a better way to
   * apply the classes for the navbar.
   */
  let tmp = false;

  onMount(() => {
    resizeNavbar();

    window.addEventListener("resize", function () {
      resizeNavbar();
    });

    window.addEventListener("scroll", function () {
      colorNavbar();
    });
  });

  // Set scroll to 0 onload so colorNavbar() doesn't immediately trigger
  var scroll = 0;

  /** Changes the navbar color depending on current screen position */
  export function colorNavbar() {
    const navbar = document.getElementById(id) as HTMLElement;
    const home = document.getElementById("top-nav") as HTMLElement;

    if (scroll == 0) {
      scroll++;
    } else if (
      home.classList.contains("active") &&
      navbar.classList.contains("navbar-dark")
    ) {
      navbar.classList.add("navbar-light", "bg-light", "opacity-75");
      navbar.classList.remove("navbar-dark", "bg-dark");
      document.documentElement.style.setProperty("--active-color", "lightgrey");
    } else if (
      !home.classList.contains("active") &&
      navbar.classList.contains("navbar-light")
    ) {
      navbar.classList.remove("navbar-light", "bg-light", "opacity-75");
      navbar.classList.add("navbar-dark", "bg-dark");
      document.documentElement.style.setProperty("--active-color", "black");
    }
  }

  /** Changes navbar classes when navbar collapses */
  export function resizeNavbar() {
    const md = 768;
    const navList = document.getElementsByClassName("nav-link");

    for (const nav of navList) {
      if (window.innerWidth < md && nav.classList.contains("px-4")) {
        nav.classList.remove("px-4");
      } else if (window.innerWidth >= md && !nav.classList.contains("px-4")) {
        nav.classList.add("px-4");
      }
    }
  }
</script>

<header>
  <nav
    {id}
    class="navbar fixed-top navbar-expand-md navbar-light bg-light opacity-75"
    class:navbar-dark={tmp}
    class:bg-dark={tmp}
  >
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand d-md-none" href=".">
        <img
          src="{base}/img/logo.png"
          id="logo"
          alt=""
          class="d-inline-block align-text-top"
        />
        &nbsp;&nbsp;Jason Zheng
      </a>

      <!-- Responsive toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar content -->
      <!-- TODO: class:collapsing is needed for the navbar animation to look smooth, or
      Svelte will remove it -->
      <div
        class="collapse navbar-collapse justify-content-center"
        class:collapsing={tmp}
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          {#each navs as nav, i}
            <a
              id={i === 0 ? "top-nav" : String(i)}
              class="nav-link px-4"
              class:active={tmp}
              href={nav.link}>{nav.label}</a
            >
          {/each}
        </div>
      </div>
    </div>
  </nav>
</header>

<style>
  @import "$lib/bootstrap.min.css";

  /* Define CSS variables */
  :root {
    /* Default lightgrey, changes to black when navbar color is inverted */
    --active-color: lightgrey;
  }

  /* Logo styling */
  img#logo {
    border-radius: 50%;
    height: 25px;
  }

  /* Show highlighted active state only on desktop */
  @media screen and (max-width: 767px) {
    a.active {
      text-decoration: underline;
      transition: 0s;
    }
  }

  @media screen and (min-width: 768px) {
    a.active {
      background-color: var(--active-color);
      border-radius: 5px;
    }

    a.nav-link:hover {
      text-decoration: underline;
    }
  }
</style>
