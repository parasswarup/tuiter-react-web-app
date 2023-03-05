function WhoToFollowListItem(who) {
    return(`<li class="list-group-item">
                <div class="d-flex flex-row align-items-center">
                    <img class="rounded-circle" height="48px" width="48px" src="../../images/${who.avatarIcon}" alt="icon">
                    <div class="flex-fill ps-1">
                        <span class="fw-bold">${who.userName}
                            <i class="fa fa-circle"></i>
                        </span><br>
                        <span>@${who.handle}</span>
                    </div>
                    <button class="btn btn-primary btn-block rounded-pill" type="button">Follow</button>
                </div>
            </li>`)
}
export default WhoToFollowListItem;