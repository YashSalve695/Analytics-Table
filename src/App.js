import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit"
import './App.css';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    return await axios
    .get("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03")
    .then((response) => setdata(response.data))
    .catch((err) => console.log(err));
  };

  console.log("data", data);
  return(
     <MDBContainer>
       <form style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
       }}
        className="d-flex input-group w-auto"
        // onSubmit={handleSearch}
       >
        <input type="text" 
        className='form-control'
        placeholder='Search'/>

       </form>

        <div style={{marginTop: "100px"}}>
          <h2>Analytics</h2>
           <MDBRow>
              <MDBCol size={12}>
                 <MDBTable>
                   <MDBTableHead dark>
                    <tr>
                       <th scope='col'>date</th>
                       <th scope='col'>app_id</th>
                       <th scope='col'>clicks</th>
                       <th scope='col'>requests</th>
                       <th scope='col'>responses</th>
                       <th scope='col'>impressions</th>
                       <th scope='col'>revenue</th>
                       {/* <th scope='col'>Fill Rate</th> */}
                       {/* <th scope='col'>CTR</th> */}
                    </tr>
                   </MDBTableHead>
                   {data.length === 0 ? (
                    <MDBTableBody className='align-center mb-0'>
                        <tr>
                          <td colSpan={8} className="text-center mb-0">No Data Found</td>
                        </tr>
                    </MDBTableBody>
                   ): (
                   data.map((item, index) => (
                      <MDBTableBody key={index}>
                       <tr>
                        <th scope='row'>{index+1}</th>
                        <td>{item.date}</td>
                        <td>{item.app_id}</td>
                        <td>{item.clicks}</td>
                        <td>{item.requests}</td>
                        <td>{item.responses}</td>
                        <td>{item.impressions}</td>
                        <td>{item.revenue}</td>
                       </tr>
                      </MDBTableBody>
                  ))
                  )}
                 </MDBTable>
              </MDBCol>
           </MDBRow>
      </div>
     </MDBContainer>
  );
}

export default App;