import fetchApiData from '../actions/great-novels';
export async function fetchData() {
  const data = await fetchApiData()
  return data
}
export const filtered = (novelsData, searchTerm) => novelsData.filter(novel => {
  return novel.title.toLowerCase().includes(searchTerm.toLowerCase())
})