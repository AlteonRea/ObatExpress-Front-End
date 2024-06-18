/* global google */

import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const MapContainer = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_API_KEY',
      version: 'weekly',
    })

    loader.load().then(() => {
      const directionsService = new google.maps.DirectionsService()
      const directionsRenderer = new google.maps.DirectionsRenderer()
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -7.791997, lng: 110.38798 }, // Centered around Bantul
        zoom: 12,
      })

      directionsRenderer.setMap(map)

      const request = {
        origin: 'Jl Krebet No. 8, Sendang Sari, Pajangan, Bantul',
        destination: 'Universitas Ahmad Dahlan Kampus 4, Bantul',
        travelMode: google.maps.TravelMode.DRIVING,
      }

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result)
        } else {
          console.error('Error fetching directions:', status)
        }
      })
    })
  }, [])

  return <div id="map" className="h-[400px] w-full]"></div>
}

export default MapContainer
