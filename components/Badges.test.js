import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badges from './Badges';

describe('Badges Component', ()=>{

     it("shows up correctly", ()=>{
        render(<Badges>Badges</Badges>)  
        
        const ele = screen.getByText("Badges")
        expect(ele).toBeInTheDocument();
        
     })

     it("applies the correct color", () => {
        render(<Badges color="blue">text</Badges>)

        const ele = screen.getByText("text")
        expect(ele).toHaveClass("blue")
     })

     it("applies the correct shape", () => {
        render(<Badges shape="pill">badge 1</Badges>)

        const ele = screen.getByText("badge 1")
        expect(ele).toHaveClass("pill")
     })

     it("applies the correct shape and color", ()=> {
        render(<Badges color="indigo" shape="square"> badge2 </Badges>)

        const ele = screen.getByText("badge2")
        expect(ele).toHaveClass("badge-item")
        expect(ele).toHaveClass("indigo")
        expect(ele).toHaveClass("square")
     })
})

