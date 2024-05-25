const MenuText=(props)=>{
    // onClickEvent=props.event;
    return (
        <div className="menu-title" onClick={
                  ()=>{
                     // onClickEvent
                    // console.log("Hello")
                  }
        }>
            <div className="title-img"></div>
            <div className="menu">Our Menu</div>
        </div>
    )
}
export default MenuText
