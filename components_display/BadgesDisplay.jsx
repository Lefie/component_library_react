import React from 'react';
import Badges from "../components/Badges"
import { Link } from "react-router-dom"

export default function BadgesDisplay() {
    console.log("badges display")

    return (
        <>
        <div className="badges_display_container">
            <Badges color="red">badge1</Badges>
            <Badges color="green" shape="pill">badge2</Badges>
            <Badges color="purple" shape="pill">badge</Badges>
            <Badges color="blue" shape="square">badge</Badges>
            <Badges color="yellow" shape="pill">badge</Badges>            
            <Badges color="indigo" shape="square">badge</Badges>
            <Badges color="pink" shape="pill">badge</Badges>
            <Badges color="gray" shape="square">badge</Badges>
        </div>
        </>
    )
}