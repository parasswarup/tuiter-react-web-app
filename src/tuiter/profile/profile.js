import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";
const ProfileInfo = () => {
    const profile = useSelector((state) => state.profile)
    return (
        <div className="wd-container">
            <div className="d-flex">
                <span>
                    <i className="fa fa-arrow-left p-3"/>
                </span>
                <div>
                    <p className="m-0 ps-2 fw-bold">{profile.firstName} {profile.lastName}</p>
                    <p className="small m-0 ps-2 text-muted">{profile.tuitsCount} tuits</p>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src={`/images/${profile.bannerPicture}`} alt="banner"/>
                <img src={`/images/${profile.profilePicture}`} className="position-absolute wd-profile-circle ms-3"/>
                <span className="d-flex float-end pt-3 me-3 ">
                    <Link to="/tuiter/edit-profile" type="button" className="btn btn-sm btn-outline-secondary text-dark fw-bold rounded-pill">Edit Profile</Link>
                </span>
            </div>
            <div className="ms-3 me-3 pt-5">
                <p className="mb-0 mt-3 fw-bold">{profile.firstName} {profile.lastName}</p>
                <p className="text-muted small m-0">{profile.handle}</p>
                <p className="mt-3">{profile.bio}</p>
                <div className="mt-3 d-flex flex-row text-muted">
                      <span className="pe-3">
                        <i className="fa fa-location-dot"/> {profile.location}
                      </span>
                    <span className="pe-3">
                        <i className="fa fa-cake-candles"/> Born: {profile.dateOfBirth}
                      </span>
                    <span className="pe-3">
                        <i className="fa fa-calendar"/> Joined: {profile.dateJoined}
                      </span>
                </div>
                <div className="mt-3 text-muted mb-3">
                  <span className="pe-3">
                    <span className="text-dark fw-bold">{profile.followingCount}</span> Following
                  </span>
                  <span className="pe-3">
                    <span className="text-dark fw-bold">{profile.followersCount}</span> Followers
                  </span>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;