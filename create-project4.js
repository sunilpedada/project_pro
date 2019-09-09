import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
export default class Create_project_3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
        render(){
        return(
            <div>
            <body style={{overflow:"hidden"}}>
<header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a className="navbar-brand" href="#">Labelbox </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"> <a className="nav-link" href="#">Tasks <span className="sr-only">(current)</span></a> </li>
        <li className="nav-item"> <a className="nav-link" href="#">
manoj+102@edgecase.ai
</a> </li>
      </ul>
    </div>
  </nav>
</header>

  <div className="main_top innerer">
<div className="view_page view_page2">
	
    	<div className="left_bar">
        	<div className="back_page">
            	<h2>Configure Interface </h2> 
               
                <div className="side_bar side_jsn">
                        
                        
                        
                        		<ul className="nav nav-tabs">
  <li><a data-toggle="tab" href="#home" className="active">Tools</a></li>
  <li><a data-toggle="tab" href="#menu1">Json</a></li>
  <li><a data-toggle="tab" href="#menu2">Instructions</a></li>
</ul>

<div className="tab-content"> 
  <div id="home" className="tab-pane fade in active"> 
  <div className="tab_inside"> 
    <h4>Objects</h4>
    <p>Add objects to segment with bounding box, polygon, line or point</p>
    	<div className="object_box"> 
        <ul>
        <li>
        	<div className="nav-item dropdown cir_boxs"> <a className="nav-link btn dropdown-toggle" type="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span> </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a className="dropdown-item" href="#"><span style={{background:"#000"}}></span></a>
           <a className="dropdown-item" href="#"><span style={{background:"#ff001d"}}></span></a>
            <a className="dropdown-item" href="#"><span style={{background:"#00ff30"}}></span></a>
             <a className="dropdown-item" href="#"><span style={{background:"#00ccff"}}></span></a>
           <a className="dropdown-item" href="#"><span style={{background:"#0012ff"}}></span></a>
            <a className="dropdown-item" href="#"><span style={{background:"#b9f176"}}></span></a>
             <a className="dropdown-item" href="#"><span style={{background:"#fc00ff"}}></span></a>
               </div>
        </div>
        	<div className="input_box">
            	<input type="text" />
            </div>
            </li>
            <li>
        	<div className="nav-item dropdown drop_box"> <a className="nav-link dropdown-toggle"  id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a className="dropdown-item" href="#">Line</a> 
           <a className="dropdown-item" href="#">Polygon </a> 
           <a className="dropdown-item" href="#">Point</a>
           <a className="dropdown-item" href="#">Reactangle</a> </div>
        </div>
        	<a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </li>
        <li>
        	<div className="nav-item dropdown cir_boxs"> <a className="nav-link btn dropdown-toggle" type="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span></span> </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a className="dropdown-item" href="#"><span style={{background:"#000"}}></span></a>
           <a className="dropdown-item" href="#"><span style={{background:"#ff001d"}}></span></a>
            <a className="dropdown-item" href="#"><span style={{background:"#00ff30"}}></span></a>
             <a className="dropdown-item" href="#"><span style={{background:"#00ccff"}}></span></a>
           <a className="dropdown-item" href="#"><span style={{background:"#0012ff"}}></span></a>
            <a className="dropdown-item" href="#"><span style={{background:"#b9f176"}}></span></a>
             <a className="dropdown-item" href="#"><span style={{background:"#fc00ff"}}></span></a>   </div>
        </div>
        	<div className="input_box">
            	<input type="text" />
            </div>
            </li>
            <li>
        	<div className="nav-item dropdown drop_box"> <a className="nav-link dropdown-toggle"  id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a className="dropdown-item" href="#">Line</a> 
           <a className="dropdown-item" href="#">Polygon </a> 
           <a className="dropdown-item" href="#">Point</a>
           <a className="dropdown-item" href="#">Reactangle</a> </div>
        </div>
        	<a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
            
        </li>
        </ul>
        </div> 

		<div className="classfication_box">
	    <h4>Classifications</h4>
        	<p>Add classifications htmlFor global assessments of the datum</p>
   
    	<div className="object_box"> 
        <ul>
        <li>
        	
        	<div className="input_box">
            	<input type="text" />
            </div>
            </li>
            <li>
        	<div className="nav-item dropdown drop_box"> <a className="nav-link dropdown-toggle"  id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <a className="dropdown-item" href="#">Radio</a> 
           <a className="dropdown-item" href="#">Checkbox</a> 
           <a className="dropdown-item" href="#">Text</a>
           <a className="dropdown-item" href="#">DropDown</a> </div>
        </div>
        	<a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </li>
        <li>
        	
        	<div className="input_box">
            	<input type="text" />
            </div>
            </li>
            <li>
        	<div className="nav-item dropdown drop_box"> <a className="nav-link dropdown-toggle"  id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item" href="#">Radio</a> 
           <a className="dropdown-item" href="#">Checkbox</a> 
           <a className="dropdown-item" href="#">Text</a>
           <a className="dropdown-item" href="#">DropDown</a> </div>
        </div>
        	<a href="#"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
            
        </li>
        </ul>
        
        	<div className="req_box">
            	Required: <input type="checkbox" />
            </div>
        
        	<div className="add_input">
        		<div className="input_box">
            	<input type="text" placeholder="New Option" />
            </div>
             <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
            </div>
         
            
            <div className="add_input">
        		<div className="input_box">
            	<input type="text" placeholder="New Option" />
            </div>
             <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
            </div>
            <div className="add_input">
        		<div className="input_box">
            	<input type="text" placeholder="New Option" />
            </div>
             <a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i></a>
            </div>
        
        </div> 
		
        </div>
    	
    </div> 
  </div> 
  <div id="menu1" className="tab-pane fade">
  
  <div className="edit_ble">

  "tools":[],
  "classifications": []

</div>
  </div>
  <div id="menu2" className="tab-pane fade">
  <div className="add_instructions">
  	<h3>Labeling Instructions <div className="browse_box">
                    	<input type="file" accept="" multiple="" style={{opacity: "0", width: "100%", height: "100%", position: "absolute",cursor: "pointer"}}
                    	/>
                        <div className="browswe_text">
                        		<span><i className="fa fa-download" aria-hidden="true"></i></span>
                                <div className="sc-hwwEjo jkdGtr"><p>Drop files here to upload</p><p><em>- or -</em></p><p>Drop a CSV or JSON file containing URLs to your data</p></div>
                                <button className="btn btn-primary" type="button">choose files to upload</button>
                        </div>
                    </div></h3>
   	<p>Attach a PDF with labeling instructions htmlFor the project. Instructions are viewable by anyone, accessed by pressing the <i className="fa fa-info-circle" aria-hidden="true"></i>   icon.</p>
  </div>
  </div>
</div>
                            
                        </div>
                      
            </div>
        </div>
    	<div className="right_bar">
        	<div className="right_menu">
            		<div className="serch_box">
                    	<div className="search-container">
    <htmlForm action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </htmlForm>
  </div>
  						<div className="setting">
                        	<a href="#" className="close_key"><i className="fa fa-keyboard-o" aria-hidden="true"></i></a>
                        	<a href="#" className="close_key1"><i className="fa fa-cog" aria-hidden="true"></i></a>
                        </div>
                    </div>
            		<ul>
                    	<li><span>1</span>Roof <div className="count"><i className="fa fa-eye"></i><span className="num">1</span></div></li>
                       
                         <li><span>2</span>Roof <div className="count"><i className="fa fa-eye-slash"></i><span className="num">1</span></div></li>
                       <li><span>3</span>Roof <div className="count"><i className="fa fa-square-o" aria-hidden="true"></i><span className="num">1</span></div></li>
                        <li><span>4</span>Roof <div className="count"><i className="fa fa-minus" aria-hidden="true"></i><span className="num">1</span></div></li>
                         <li><span>5</span>Roof <div className="count"><i className="fa fa-eye"></i><span className="num">1</span></div></li>
                    </ul>
            </div>
            <div className="keybord-shortcut">
            		<h3>Keyboard Shortcuts <a href="#" className="close_key"><i className="fa fa-close"></i></a> <span>Get insanely fast at labeling
					</span> </h3>
                    
               <div className="list_keys">
               		<h5>Classes</h5>
                    
                    <ul>
                    	<li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        <li>roof <span>1</span></li>
                        
                        
                        
                    </ul>
               </div>     
            </div>
            
            
            <div className="keybord-shortcut1">
            		<h3>Keyboard Shortcuts <a href="#" className="close_key1"><i className="fa fa-close"></i></a> <span>Get insanely fast at labeling
					</span> </h3>
                    
               <div className="list_keys">
               		<h5>Interface Settings</h5>
                    	
                      <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label htmlFor="f-option">Show annotation classes</label>
    
    <div className="check"></div>
    <span>Permanently overlay class labels on annotations</span>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label htmlFor="s-option">Bacon</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector"/>
    <label htmlFor="t-option">Cats</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>  
                    
               </div>     
            </div>
            
            <div className="right_full_img">
            <div className="like_boxs">
            	<div className="like_boxleft">
                        <div className="like1"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                        <span>1 </span>
                        <div className="like1"><i className="fa fa-thumbs-down" aria-hidden="true"></i></div>
                         <div className="like1"><i className="fa fa-star" aria-hidden="true"></i></div>
                         </div>
                         
            </div>
            	<div className="fil_middle">	<img src="images/Medical-Annotation.jpg" alt="" /></div>
            </div>
        </div>

</div>
</div>

</body>

            </div>
        )
        }
}