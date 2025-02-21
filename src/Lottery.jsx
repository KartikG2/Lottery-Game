import { useState } from "react"
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket";
import './Lottery.css';


export default function Lottery({n = 3,winCondition}){
    let[ticket,setTicket] = useState(generateTicket(n));
    let isWinning = winCondition(ticket);

    let newTicket=()=>{
        setTicket(generateTicket(n));
    }

    return (
    <div>
        <p className="note"><i class="fa-regular fa-lightbulb"></i> If the sum of the ticket number is equals to 15 then you win the reward </p>
        <h1>Lottery-Ticket</h1>
        <Ticket ticket={ticket}/>
        <button onClick={newTicket} >Get new Lottery</button>
        <h2>{isWinning && "Congratulations you won!!"}</h2>
    </div>
    )
}