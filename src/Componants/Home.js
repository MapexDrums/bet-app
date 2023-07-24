import { useState } from "react";
import BetList from "./BetList";

const Home = () => {
    const [bets,setBets] = useState([
        { match: 'Liverpool vs Man Utd', betType: 'over 2.5', person: 'Tom', id: 1},
        { match: 'Wrexham vs Chelsea', betType: 'Draw', person: 'Sam', id: 2},
        { match: 'Arsenal vs Man City', betType: 'Man City Win', person: 'Matt', id: 3},
        { match: 'Spain vs France', betType: 'BTTS', person: 'Tim', id: 4},
    ]);

    const handleDelete = (id) => {
        const newBets = bets.filter( bet => bet.id !== id);
        setBets(newBets);
    }

    return ( 
        <div className="home">
            <BetList bets={bets} title="This weeks bets" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;