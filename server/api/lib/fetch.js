import axios from 'axios'; 

const fetchUsers = async () => {
    const res = await axios.get('https://dummyapi.io/data/api/user?limit=50', {headers: {'app-id':'5fb5f15dee5e453ddb1d36ee'}})
    const data = res.data
    return data
}

export default fetchUsers; 