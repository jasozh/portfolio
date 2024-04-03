<script lang="ts">
  import { Appbar } from "$lib";

  export let id: string;

  const navs = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Contact", link: "#contact" },
    { label: "Projects", link: "#projects" },
    { label: "Hobbies", link: "#hobbies" },
  ];
</script>

<Appbar {id} {navs} />
