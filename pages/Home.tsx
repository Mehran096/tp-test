import React from 'react'

export default function Home() {
    return (
        <div className="large-f">
            <div style={{background:"#d5c8c8"}}>
          <span style={{marginLeft:"14px", width:"30px", borderRadius:"70px", background:"red", color:"red", fontSize:"8px"}}>me</span>
          <span style={{marginLeft:"14px", width:"30px", borderRadius:"70px", background:"green", fontSize:"8px", color:"green"}}>me</span>
          <span style={{marginLeft:"14px", width:"30px", borderRadius:"70px", background:"#d1cc21", fontSize:"8px", color:"#d1cc21"}}>me</span>
          </div>
            <header>
          
          <nav id="menu">
              <ul>
                  <li>
                      <a href="/#no">ACME</a>
                  </li>
              </ul>
          </nav>
          <nav id="social-links">
            <ul>
                <li>
                    <a href="/#vvbn"> HOme</a>
                </li>
                <li>
                    <a href="/#vvbn">HOme</a>
                </li>
                <li>
                    <a href="/#vvbn">HOme</a>
                </li>
                <li>
                    <a href="/#vvbn">HOme</a>
                </li>
                <li style={{marginLeft:"10px"}}>
                    <a href="/#vvbn"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 1024 1024" strokeWidth="0" width="1em" height="1em" ><path d="M 909.6 854.5 L 649.9 594.8 C 690.2 542.7 712 479 712 412 c 0 -80.2 -31.3 -155.4 -87.9 -212.1 c -56.6 -56.7 -132 -87.9 -212.1 -87.9 s -155.5 31.3 -212.1 87.9 C 143.2 256.5 112 331.8 112 412 c 0 80.1 31.3 155.5 87.9 212.1 C 256.5 680.8 331.8 712 412 712 c 67 0 130.6 -21.8 182.7 -62 l 259.7 259.6 a 8.2 8.2 0 0 0 11.6 0 l 43.6 -43.5 a 8.2 8.2 0 0 0 0 -11.6 Z M 570.4 570.4 C 528 612.7 471.8 636 412 636 s -116 -23.3 -158.4 -65.6 C 211.3 528 188 471.8 188 412 s 23.3 -116.1 65.6 -158.4 C 296 211.3 352.2 188 412 188 s 116.1 23.2 158.4 65.6 S 636 352.2 636 412 s -23.3 116.1 -65.6 158.4 Z" /></svg>
                    </a>
                </li>
            </ul>

          </nav>
      </header>

      <div id="second">
                    <div className="lorem-f">
                        <div style={{ marginLeft: "8rem", marginBottom: "1.5rem", fontSize: "2rem" }}>
                           Lorem, ipsum dolor.
                        </div>

                        <p style={{ textAlign: "center" }}> Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Mollitia, officiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Consequuntur maxime, tempore alias ullam rem nisi adipisci sed consequatur dicta soluta.
                        </p>


                    </div>
                    <div className="search-bar mt-5 mx-5" >


                        <div className="d-flex" style={{ border: "1px solid black", textAlign: "center", borderRadius: "3px" }}>

                            <svg style={{ marginTop: "5px", marginLeft: "7px", fontSize: "25px" }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 1024 1024" strokeWidth="0" width="1em" height="1em"><path d="M 909.6 854.5 L 649.9 594.8 C 690.2 542.7 712 479 712 412 c 0 -80.2 -31.3 -155.4 -87.9 -212.1 c -56.6 -56.7 -132 -87.9 -212.1 -87.9 s -155.5 31.3 -212.1 87.9 C 143.2 256.5 112 331.8 112 412 c 0 80.1 31.3 155.5 87.9 212.1 C 256.5 680.8 331.8 712 412 712 c 67 0 130.6 -21.8 182.7 -62 l 259.7 259.6 a 8.2 8.2 0 0 0 11.6 0 l 43.6 -43.5 a 8.2 8.2 0 0 0 0 -11.6 Z M 570.4 570.4 C 528 612.7 471.8 636 412 636 s -116 -23.3 -158.4 -65.6 C 211.3 528 188 471.8 188 412 s 23.3 -116.1 65.6 -158.4 C 296 211.3 352.2 188 412 188 s 116.1 23.2 158.4 65.6 S 636 352.2 636 412 s -23.3 116.1 -65.6 158.4 Z" /></svg>
                            <input style={{ border: "none", padding: "4px  10px", marginLeft: "11px", outline: "0" }} type="text" placeholder="search" />
                            <div style={{ background: "black", color: "white", width: "9rem", padding: "1px 10px", marginLeft: "5rem" }}> Search</div>

                        </div>



                    </div>

          </div>
         

       
      <br/> 

      {/* card */}
      <div className="container first my-4 align-content-lg-around">
            <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                <div className="gallery" style={{ border: "1px solid black", width: "290px", marginTop:"10px"}}>
                    <div style={{ height: "150px", background: "#d9dadc", width: "18rem", }}></div>

                    <div className="card-body">
                        <p  style={{ fontSize: "20px", fontWeight: "bold" }}>lorem, ipsum</p>
                        <p >Lorem, ipsum dolor. </p>
                    </div>

                </div>
                   



            </div>
      {/* card */}

      </div>
     

       
        
    
    )
}
