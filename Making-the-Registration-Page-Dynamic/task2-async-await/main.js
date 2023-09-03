const posts=[{title:"POST1"},{title:"POST2"}];

var lastActivityTime = "";

const createPost = async (post) => {
    return new Promise( (resolve)=>{
        setTimeout( ()=>{
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

const updateLastUserActivityTime = async() => {
    return new Promise( (resolve)=>{
        setTimeout( ()=>{
            lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

const deletePost = async() => {
    return new Promise( (resolve)=>{
        setTimeout( ()=>{
            let deletedPost = posts.pop();
            resolve(deletePost);
        }, 1000);
    });
}

const run = async ()=>{
    const [post, userStatus] = await Promise.all([
        createPost({title: "POST3"}),
        updateLastUserActivityTime()
    ]);
    
    console.log("All posts after adding new post:");
    posts.forEach(post => console.log(post.title));
    console.log(`user last seen: ${userStatus}`);

    const [deletedPost, updatedUserStatus] = await Promise.all([
        deletePost(),
        updateLastUserActivityTime()
    ]);

    console.log("Remaining posts after deletion:");
    posts.forEach(post => console.log(post.title));
    console.log(`User last seen: ${updatedUserStatus}`);
};
run();



