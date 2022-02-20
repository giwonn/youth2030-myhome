<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import NaverMap from '@/lib/NaverMap.svelte';
  import SearchBox from '@/lib/SearchBox.svelte';

  const childHeight = '90vh';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <LayoutGrid style="padding:0;">
    <Cell span={9}>
      <NaverMap style="height: {childHeight};" />
    </Cell>
    <Cell span={3}>
      <SearchBox style="height: {childHeight};" />
    </Cell>
  </LayoutGrid>
</section>
