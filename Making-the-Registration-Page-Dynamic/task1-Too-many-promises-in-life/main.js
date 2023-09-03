const posts=[{title:"POST1"},{title:"POST2"}];

var lastActivityTime = "";

function createPost(post) {
    return new Promise( (resolve)=>{
        setTimeout( ()=>{
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime(){
    return new Promise( (resolve)=>{
        setTimeout( ()=>{
            lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise( (resolve,reject)=>{
        setTimeout( () => {
            if (posts.length>0){
                deletedPost = posts.pop();
                resolve(deletedPost);
            }else {
                reject("Error");
            }
        }, 1000);
    });
}

Promise.all([createPost({title:"POST3"}), updateLastUserActivityTime()]).then( ([post, userStatus])=>{
    console.log("All posts after adding new post");
        for(let i=0; i<posts.length; i++){
            console.log(posts[i].title);
        }
    console.log(`user last seen: ${userStatus}`);
    Promise.all([deletePost(), updateLastUserActivityTime()]).then( ([deletedPost, userStatus])=>{
        console.log("remaining posts after deletion");
        for(let i=0; i<posts.length; i++){
            console.log(posts[i].title);
        }
        console.log(`user last seen: ${userStatus}`);
    }).catch(error => console.log(error));
})

