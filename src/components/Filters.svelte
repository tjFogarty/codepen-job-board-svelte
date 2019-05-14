<script>
  import { searchTerm, remoteOnly, filteredJobs } from '../stores'
</script>
<div class="filters">
  <div class="filter-search-block">
    <label class="filter-search-label" for="search">Search by Job Title:</label>
    <input
      id="search"
      placeholder="e.g., front end"
      bind:value="{$searchTerm}"
    />
  </div>

  <input
    class="filter-remote-checkbox"
    type="checkbox"
    id="remote-only"
    bind:checked="{$remoteOnly}"
  />
  <label for="remote-only">Remote Only</label>
</div>

<style>
  label {
    display: inline-block;
  }

  .filter-search-block {
    margin-bottom: 10px;
  }

  .filter-search-label {
    display: block;
    margin-bottom: 8px;
  }

  .filter-remote-checkbox {
    margin-right: 5px;
  }
</style>
