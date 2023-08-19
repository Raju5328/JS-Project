const fetchUsers = async()=>{
    try{
        const response = await fetch('ttps://gorest.co.in/public-api/users');
        if(!response.ok){
            throw new Error("Request failed with status: "  + response.status);
        }
        const data = await response.json();
        return data.data;
    }catch (error){
        throw new Error('Error fetching users: '+ error.message);
    }
}

(async () => {
    try {
        const users = await fetchUsers();
        console.log('Fetched users:' + users);
    }catch(error){
        console.log(error.message)
    }
})();