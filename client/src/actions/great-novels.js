import axios from 'axios';
const fetchData = async () => {
  const { data } = await axios.get('http://localhost:8080/api')
  return data
}
export default fetchData