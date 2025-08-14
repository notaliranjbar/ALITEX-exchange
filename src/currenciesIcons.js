const CurrenciesIcons = ({itemId , imageUrl , itemPrice ,itemDailyChange , itemPositionLeft , itemPositionTop })=>{
    return(
        <div class = "currency">
            <div
            key={itemId}
            style={{
                position: "absolute",
                left: itemPositionLeft,
                top: itemPositionTop,
                textAlign: "center",
                width: "120px", 
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