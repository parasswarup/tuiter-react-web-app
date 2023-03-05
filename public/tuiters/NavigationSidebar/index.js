const NavigationSidebar = (active) => {
    return(`
   <div class="bg-dark text-white list-group">
            <a class="list-group-item list-group-item-action" href="#" >
                <i class="fa fa-t"></i></a>
            <a class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html">
                <i class="fa fa-home"></i><span class="d-none d-xl-inline"> Home</span></a>
            <a class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}" href="../explore/index.html">
                <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline">Explore</span></a>
            <a class="list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}" href="#">
                <i class="fa fa-bell"></i><span class="d-none d-xl-inline">Notifications</span></a>
            <a class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}" href="#">
                <i class="fa fa-envelope"></i><span class="d-none d-xl-inline">Messages</span></a>
            <a class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}" href="../bookmark/index.html">
                <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline">Bookmarks</span></a>
            <a class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}" href="#">
                <i class="fa fa-list"></i><span class="d-none d-xl-inline">Lists</span></a>
            <a class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}" href="../profile.html">
                <i class="fa fa-user"></i><span class="d-none d-xl-inline">Profile</span></a>
            <a class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}" href="#">
                <i class="fa fa-ellipsis-h"></i><span class="d-none d-xl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;