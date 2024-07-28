import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import PersonalData from "./PersonalData/PersonalData";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://www.shutterstock.com/shutterstock/photos/2160328801/display_1500/stock-vector-abstract-modern-blue-horizontal-banner-background-with-geometric-diagonal-overlay-layer-and-glowing-2160328801.jpg" alt=""/>
            <div className={`${s.grid_2} + ${s.profile}`}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuzMKcfhq-9lx6EIotT-jkSo8QGAsO6Hfnw&s" alt=""/>
                <PersonalData />
            </div>

            <MyPosts />
        </div>
    )
}

export default Profile;