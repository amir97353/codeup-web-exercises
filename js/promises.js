

function getUserInfo(username) {
   let result = fetch(`https://api.github.com/users/${username}/events/public` , {
        headers: {
            'Authorization': `Bearer ${GITHUB_API}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data[0].created_at);
            return data[0].created_at

        });
    return result
}

getUserInfo('xjohnnymartinezx').then(data => console.log(new Date(data).toDateString()))