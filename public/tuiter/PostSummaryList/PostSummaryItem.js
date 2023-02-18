function PostSummaryItem(post) {
    return(`<li class="list-group-item">
                <div class="row">
                    <div class="col-10">
                        <span class="text-muted">${post.topic}</span><br>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa fa-circle"></i>
                        <span class="text-muted">${post.time}</span>
                        <p class="fw-bold">${post.title}</p>
                    </div>
                    <div class="col-2">
                        <img class="position-relative img-fluid rounded-3" src=${post.image} alt="img">
                    </div>
                </div>
            </li>`)
}
export default PostSummaryItem;