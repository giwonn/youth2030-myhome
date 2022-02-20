<script lang="ts">
  import { Cell, InnerGrid } from '@smui/layout-grid';
  import Paper from '@smui/paper';
  import { Icon } from '@smui/common';
  import { Input } from '@smui/textfield';
  import Card from '@smui/card';
  import Fab from '@smui/fab';
  import api from '@/api';

  export let style: string = '';
  let value = '';

  function handleKeyDown(event: CustomEvent | KeyboardEvent) {
    event = event as KeyboardEvent;
    if (event.key === 'Enter') {
      doSearch();
    }
  }
  async function doSearch() {
    const res = await api.naver.getSearchResult(value);
  }
</script>

<Card {style}>
  <InnerGrid>
    <Cell span={12}>
      <div class="solo-demo-container solo-container">
        <Paper class="solo-paper" elevation={6}>
          <Icon class="material-icons">search</Icon>
          <Input
            bind:value
            on:keydown={handleKeyDown}
            placeholder="Search"
            class="solo-input"
          />
        </Paper>
        <Fab
          on:click={doSearch}
          disabled={value === ''}
          color="primary"
          mini
          class="solo-fab"
        >
          <Icon class="material-icons">arrow_forward</Icon>
        </Fab>
      </div>
    </Cell>
    <Cell span={12}>검색결과 리스트로 여기에 출력</Cell>
  </InnerGrid>
</Card>

<style>
  .solo-demo-container {
    padding: 36px 18px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }

  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
</style>
