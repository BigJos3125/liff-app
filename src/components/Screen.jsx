import './Screen.css'
function Screen(props) {
    return (
        
        <div className="container">
             <div className="background-image"></div>
              {/* <div className="overlay-box"></div> */}
            
            {props.children}
            
            
        </div>
    );
}

export default Screen;