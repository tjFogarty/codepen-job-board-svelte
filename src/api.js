import { isLoading } from './stores'

export async function getJobs() {
  const response = await fetch('https://codepen.io/jobs.json')
  return response.json()
}
