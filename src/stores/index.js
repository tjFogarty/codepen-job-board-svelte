import { writable, derived } from 'svelte/store'

export const jobs = writable([])

export const isLoading = writable(true)

export const searchTerm = writable('')

export const remoteOnly = writable(false)

export const filteredJobs = derived(
  [jobs, remoteOnly, searchTerm],
  ([$jobs, $remoteOnly, $searchTerm]) => {
    return sortByFeatured(
      filterByRemote(filterBySearchTerm($jobs, $searchTerm), $remoteOnly)
    )
  }
)

function filterBySearchTerm(jobs, searchTerm) {
  if (!searchTerm) return jobs

  return jobs.filter(job => {
    const title = job.title.toLowerCase().replace('-', ' ')
    const formattedTerm = searchTerm.toLowerCase().trim()

    return title.includes(formattedTerm)
  })
}

function filterByRemote(jobs, remoteOnly) {
  if (!remoteOnly) return jobs

  return jobs.filter(job => !job.location)
}

function sortByFeatured(jobs) {
  return jobs.sort((a, b) => (a.featured ? -1 : 1))
}
