const CurrenciesIcons = ({itemId , imageUrl , itemPrice ,itemDailyChange , itemPositionLeft , itemPositionTop , borderColor ,size , animationDelay})=>{
    return(
        <>
        <div  className="currency"
            key={itemId}
            style={{
                "--border-color" : `rgba${borderColor}`,
                position: "absolute",
                left: itemPositionLeft,
                top: itemPositionTop,
                textAlign: "center",
                width : `${size}px`, 
                height : `${size}px`,
                animationDelay : `${animationDelay}s`
            }}
        >
        <img src={imageUrl} alt={itemId} width={size} />
        </div>
        <div className= "priceWrapper" key={itemId} style={{
            position: "absolute",
            left: `${itemPositionLeft - 60}px`,
            top: `${itemPositionTop - 15}px`
        }}><p style={{fontWeight : "bold"}}><span style={{textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)"}}>${itemPrice}</span>
            <span style={{ color: itemDailyChange >= 0 ? "green" : "red"}}>{itemDailyChange.toFixed(2)}%</span></p>
        </div>   
        </>

    )
}
export default CurrenciesIcons;