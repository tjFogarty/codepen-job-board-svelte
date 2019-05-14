<script>
  export let featured
  export let title
  export let company_name
  export let location
  export let url
</script>

<a class="job" target="_blank" rel="noopener noreferrer" href="{url}">
  <h2 class="job-title">{#if featured}Featured: {/if}{title}</h2>
  <p>Company: {company_name}</p>
  <p>
    Location: {#if location} {location} {:else} Remote {/if}
  </p>
</a>

<style>
  .job {
    display: block;
    text-decoration: none;
    color: #000;
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(45deg, #47cf73, #ffdd40);
    border-radius: 5px;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1);
    transition: transform ease 0.2s;
    will-change: transform;
  }

  .job:hover,
  .job:focus {
    transform: scale(1.1);
  }

  .job-title {
    margin-top: 0;
  }
</style>
