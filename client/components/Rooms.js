import React from 'react';
import Content from './Content';

function Rooms(props) {
  return (
    <div>
      <Content
        headLine= 'Rooms'
        bodyCopy= "Tuft love. Upholstered in a steel gray linen weave,our Grid-Tufted Tapered Leg Bed puts a retro spin on a classic silhouette. With a vintage-style low profile and walnut-finished cone legs, it sits seamlessly with our mid-century nightstands and dressers."
        imageOne="../assets/room_one.jpg"
        imageTwo="../assets/room_two.jpg"
        imageThree="../assets/room_three.jpg"
        imageFour="../assets/room_four.jpg"
      />
   </div>
  )
}

export default Rooms;
