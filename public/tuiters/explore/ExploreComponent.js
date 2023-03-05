import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="wd-search-tuiter">
                <div class="rounded-pill wd-search-input bg-white">
                    <span class="text-muted fa fa-search"></span>
                    <input class="rounded-pill form-control border-0 m-0" placeholder="Search Tuiter"
                           type="text">
                </div>
                <a class="ms-2" href="explore-settings.html"><i class="fa fa-cog"></i></a>
            </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-inline-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="mt-2 position-relative">
                <div class="position-relative">
                    <img class="position-relative img-fluid" src="../../images/starship.jpg"
                         width="100%">
                    <h2 class="text-black fw-bold position-absolute bottom-0 ps-2">SpaceX's Starship</h2>
                </div>
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;