import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="imgadj">
      <img className="imgcls" src="/images/mapimage.jpg" alt="google map location"/>
      </div>



      <div className="main">

           <h2 className="txtalignh">Dr. Gordon Freeman,MD</h2>
 
          <table cellSpacing="30" className="tblset">
            <tr><td>Family Medicine</td><td><span aria-label="search" role="img">🌟🌟🌟🌟🌟</span></td></tr>
            <tr><td>Dallas,TX</td><td>Gender: M</td></tr>
            <tr><td>2.3 miles</td><td>Age: 47</td></tr>
          </table>


          <hr/>
          <p>
          <b>Practice address:</b><text>1234 W Campbell Rd #200, Dallas,TX 75080</text><br/>
          <b>Phone: </b><text className="contacttxtclr"> (123) 456-7890</text>  
          </p>
          <hr/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <b>In practice since:</b><br/><br/>
          <text className="textalign">1997</text><br/><br/>
          <b>Board certifications:</b>&nbsp;why does it matter?<br/>
          <table cellSpacing="30" className="tblset">
            <tr><td>Certification 1</td><td>Certification 2</td></tr>
            <tr><td>Certification 3</td><td>Certification 4</td></tr>
          </table>
          <b>Education:</b><br/>
          <table cellSpacing="30" className="tblset">
            <tr><td>Texas A&M University</td><td>Undergraduate School</td><td>2003</td></tr>
            <tr><td>University of Texas at Galveston</td><td>Medical School</td><td>2009</td></tr>
            <tr><td>University of Texas at Galveston</td><td>Internship Hospital</td><td>2010</td></tr>
            <tr><td>University of Texas at Galveston</td><td>Residency Hospital</td><td>2013</td></tr>
          </table>
       
          <b>Affiliations:</b><br/><br/>
          <p className="textalign">
          <b>Baylor Scott & White Heart and Va  </b><text>621 North Dallas St,Dallas,TX 75226</text><br/>
          <b>Baylor University Medical center  </b><text>3500 Gaston Ave,Dallas,TX 75246</text><br/>
          <b>Yet Another Hospital  </b><text>123 Main St,Dallas, TX 65226</text><br/>
          </p>
          <hr/>

          

         <b>Review Summary</b><br/><br/>

          <div className="review">
         <div><b>5</b><img className="imagesizead" src="/images/qmb.png" alt="questionmark"/></div><div><hr className="bar1"/></div></div>

         <div className="review">
         <div><b>4</b><img className="imagesizead" src="/images/qmb.png" alt="questionmark"/></div><div><hr className="bar2"/></div></div>

        <div className="review">
         <div><b>3</b><img className="imagesizead" src="/images/qmb.png" alt="questionmark"/></div><div><hr className="bar3"/></div></div>

         <div className="review">
         <div><b>2</b><img className="imagesizead" src="/images/qmb.png" alt="questionmark"/></div></div>

         <div className="review">
         <div><b>1</b><img className="imagesizead" src="/images/qmb.png" alt="questionmark"/></div></div><br/>


           <span aria-label="search" role="img">
           🌟🌟🌟🌟🌟
           </span>

           <text>&emsp;06/22/2018</text><br/><br/>

         <text>This office is amazing, the staff was nice and courteous.The visits that i had were easy and smooth.I only had pain for two days tops and that is without medications.I am truly happy with this office and will keep back if I ever need to again!!!</text><br/><br/>


         
    
      </div>
      </div>
      
      );
  }
}

export default App;
