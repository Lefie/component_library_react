import React from 'react';
import { createContext, useState } from "react"

const BadgesContext = createContext()
export {BadgesContext}

export default function Badges({children, color="gray", shape="square"}) {
    console.log(color, shape)

    return(
        <BadgesContext.Provider value={{color, shape}}>
            <>
            <div className={`badge-item ${color} ${shape}`}>
               {children}
            </div>
            </>
        </BadgesContext.Provider>
    )
}

