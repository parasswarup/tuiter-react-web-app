function PostItem(posts) {
    return(`<li class="list-group-item bg-black">
                        <div class="row">
                            <div class="col-1 pl-1 pr-0">
                                <img class="rounded-circle" src=${posts.display} alt="img" width="100%">
                            </div>
                            <div class="col-11">
                                <span class="fw-bold ">${posts.userName}</span>
                                <i class="fa fa-check-circle"></i>
                                <span class="text-muted">${posts.handle} &#x2022;</span> 
                                <span class="text-muted">${posts.time}</span>
                                <span class="float-end"><i class="fa-solid fa-ellipsis"></i> </span>
                                <p>${posts.title}</p>
                                <div>
                                    <img class="wd-rounded-top" src="${posts.post.image}" width="100%">
                                    <div class=" wd-rounded-bottom"
                                    <p class="fw-bold">${posts.post.heading}</p>
                                    <p class="text-muted">${posts.post.content}</p>
                                    </div>                              
                                </div>
                                <div class="row">
                                <span class="col-3">
                                        <i class="fa-solid fa-comment"></i> ${posts.comments}
                                </span>
                                <span class="col-3">
                                        <i class="fa-solid fa-retweet"></i> ${posts.retuit}
                                </span>
                                <span class="col-3">                       
                                        <i class="fa-solid fa-heart"></i> ${posts.likes}
                                </span>
                                <span class="col-3">
                                        <i class="fa-solid fa-upload"></i>
                                </span>
                                </div>
                            </div> 
            </li>`)
}
export default PostItem;