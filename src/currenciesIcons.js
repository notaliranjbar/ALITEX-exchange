const CurrenciesIcons = ({itemId , imageUrl , itemPrice ,itemDailyChange , itemPositionLeft , itemPositionTop })=>{
    return(
        <div>
            <div  class = "currency"
            key={itemId}
            style={{
                position: "absolute",
                left: itemPositionLeft,
                top: itemPositionTop,
                textAlign: "center",
            }}
            >
            <img src={imageUrl} alt={itemId} width={50} />
            <p style={{marginTop : -80 , marginLeft : -70}}><span>${itemPrice}</span>-
            <span style={{ color: itemDailyChange >= 0 ? "green" : "red" }}>{itemDailyChange.toFixed(2)}%</span></p>
            </div>
        </div>

    )
}
export default CurrenciesIcons;