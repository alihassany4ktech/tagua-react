
import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


const MapContainer = (props) => {

      const style = {
            width: '100%',
            height: '420px',
      }
      return (
            <>

                  <div className="row" style={{ height: "320px" }}>
                        <Map google={props.google}
                              style={style}
                              zoom={5}
                              initialCenter={{

                                    lat: 30.375320,
                                    lng: 69.345116,
                              }}
                              center={{
                                    lat: 30.375320,
                                    lng: 69.345116,
                              }}

                        >
                              <Marker
                                    position={{ lat: 30.375320, lng: 69.345116, }}

                              />

                        </Map>
                  </div>






            </>
      );
}

export default GoogleApiWrapper({
      apiKey: process.env.React_App_Google_Map_Api_Key
})(MapContainer)