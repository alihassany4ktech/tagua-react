
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
                              zoom={14}
                              initialCenter={{

                                    lat: 25.795210,
                                    lng: -80.235380,
                              }}
                              center={{
                                    lat: 25.795210,
                                    lng: -80.235380,
                              }}

                        >
                              <Marker
                                    position={{ lat: 25.795210, lng: -80.235380, }}

                              />

                        </Map>
                  </div>






            </>
      );
}

export default GoogleApiWrapper({
      apiKey: process.env.React_App_Google_Map_Api_Key
})(MapContainer)