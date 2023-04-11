

function getUserInfo(username) {
    fetch(`https://api.github.com/users/${username}/events/public` , {
        headers: {
            'Authorization': `Bearer ${GITHUB_API}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data[0].created_at);

        });
}

getUserInfo('xjohnnymartinezx')