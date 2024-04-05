<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="tw-inline-flex tw-w-full tw-items-center tw-rounded-lg tw-border tw-border-gray-200 tw-bg-gray-50 tw-p-2 tw-text-base tw-font-medium tw-text-gray-500 hover:tw-bg-gray-100 hover:tw-text-gray-900"
>
  <span><slot /></span>
</a>
