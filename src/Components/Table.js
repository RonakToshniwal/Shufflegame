
import ball from "./images/ball.png"
import pikachu from "./images/pikachu.png"
import pine from "./images/pine.png"
import bird from "./images/bird.png"
import grasstype from "./images/grasstype.png"
import landtype from "./images/landtype.png"
import watertype from "./images/watertype.png"

import dog from "./images/dog.png"
import charmender from "./images/charmender.png"
import "./Table.css"
import React, { useState } from 'react';

var cards=[pikachu,pikachu,pine,pine,bird,bird,grasstype,grasstype,landtype,landtype,watertype,watertype,dog,dog,charmender,charmender
]
var count=0
console.log(ball)
const Table=()=>{


    var im1={id:"none",
            value:"none"
            }
    var im2={id:"none",
    value:"none"
    }
    const [turn,setturn]=useState(0)


    const imageChangeHandller =(e)=>{
        e.target.setAttribute( 'src', pikachu)
    }

    
    function shuffleArray(array) {
        
        return array.sort( ()=>Math.random()-0.5 );
      
     }








    const tableClickHandller =(e)=>{
        const m=Number(e.target.id)
        if (e.target.src.split('/').at(-1).slice(0,4)!='ball')
        return;
        else 
        if (im1.value=='none'){
            
            const m=Number(e.target.id)
            e.target.setAttribute( 'src', cards[m])
            im1.value=cards[m]
            im1.id=e.target.id
            
        }
        else if (im2.value=='none'){
            console.log("hello")
            const m=Number(e.target.id)
            e.target.setAttribute( 'src', cards[m])
            im2.value=cards[m]
            im2.id=e.target.id
            
            
            


            if (im1.value==im2.value){
                console.log("match")
                setTimeout(() => {
                    count=count+1
                    if (count==8){
                        alert("gamecompleted")
                    }
                return
                  }, 1000);
            }
            else{

                setTimeout(() => {
                    (document.getElementById(im2.id).src=ball)
                (document.getElementById(im1.id).src=ball)
                return
                  }, 500);
                
            }
            setturn(turn+1)
        }
        console.log(im1,im2)
        console.log(count)
      
        return
    }
    const resethandler = ()=>{
        for(var i =0;i<16;i++){
            (document.getElementById(String(i)).src=ball)
        }

        shuffleArray(cards)
        count=0
        setturn(0)
    }






    return (
    <div>
        <h1>Hello World</h1>
        <button type="button" className="btn btn-success" onClick={resethandler}>Restart</button>
        <table className="card-table" onClick={tableClickHandller}>
        <tr>
            <td><img id='0' src={ball} /></td>
            <td><img id='1' src={ball}  /></td>
            <td><img id='2' src={ball} /></td>
            <td><img id='3' src={ball}  /></td>
        </tr>
        <tr>
            <td><img id='4' src={ball} /></td>
            <td><img id='5' src={ball}  /></td>
            <td><img id='6' src={ball} /></td>
            <td><img id='7' src={ball}  /></td>
        </tr>
        <tr>
            <td><img id='8' src={ball} /></td>
            <td><img id='9' src={ball}  /></td>
            <td><img id='10' src={ball} /></td>
            <td><img id='11' src={ball}  /></td>
        </tr>
        <tr>
            <td><img id='12' src={ball} /></td>
            <td><img id='13' src={ball}  /></td>
            <td><img id='14' src={ball} /></td>
            <td><img id='15' src={ball}  /></td>
        </tr>
        </table>
        <h1>Count : {turn}</h1>
    </div>
    )
}

export default Table