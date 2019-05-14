<script>
	import { onMount } from 'svelte'
  import Job from './components/Job.svelte'
  import Filters from './components/Filters.svelte'
	import { jobs, filteredJobs, isLoading } from './stores'
	import { getJobs } from './api'

  onMount(async () => {
		const results = await getJobs()
    jobs.set(results.jobs)
    isLoading.set(false)
	})
</script>

<h1 class="app-title">CodePen Job Board</h1>

{#if $isLoading}
<div class="job-list-loading">Loading Jobs...</div>
{:else}
<Filters />
<ul class="job-list">
  {#each $filteredJobs as job (job.hashid)}
  <li>
    <Job {...job} />
	</li>
	{:else}
	<li class="job-list-no-results">No Results Found</li>
  {/each}
</ul>
{/if}

<style>
  .app-title {
    color: #fff;
    text-align: center;
  }

  .job-list {
    display: grid;
    list-style: none;
    margin: 20px 0;
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
  }

  .job-list-loading,
  .job-list-no-results {
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    grid-column: 1 / -1;
    height: 70vh;
  }
</style>
