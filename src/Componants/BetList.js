const BetList = ( {bets, title, handleDelete} ) => {

    return ( 
        <div className="bet-list">
            <h2>{ title } </h2>
                {bets.map((bet) => (
                <div className="bet-preview" key={bet.id}>
                    <h2> {bet.match} - {bet.betType}</h2>
                    <p>Placed by {bet.person} </p>
                    <button onClick={() => handleDelete(bet.id)}>delete bet</button>

                </div>
            ))}
        </div>
     );
}
 
export default BetList;