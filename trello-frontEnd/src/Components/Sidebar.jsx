import "./style.css"


function SideBar() {
    return(
         <div className="sidebar">
            <h2 style={{textAlign:'center'}}>Trello Board</h2>

            <ul style={{margin:"15px"}}>
                <li style={{marginLeft:'10px',listStyle:"none"}}>DashBoard</li>
            </ul>
         </div>
    )
}

export default SideBar;