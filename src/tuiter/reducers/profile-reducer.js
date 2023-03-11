import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    firstName: "Paras",
    lastName: "Swarup",
    tuitsCount: "1234",
    handle: "@dummy",
    profilePicture: "owner.jpg",
    bannerPicture: "banner.jpg",
    bio: "MSCS at Northeastern University",
    website: "youtube.com/dummytv",
    location: "Boston, MA",
    dateOfBirth: "01/02/1900",
    dateJoined: "04/2000",
    followingCount: 1234,
    followersCount: 4321
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        editProfile(state, action) {
            return action.payload;
        },
    }
});
export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;