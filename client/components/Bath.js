import React from 'react';
import Content from './Content';

function Bath(props) {
  return (
     <div>
      <Content
        headLine= 'Bath'
        bodyCopy= "With a casual, heathered effect that's easy to layer, our Belgian Linen Melange Duvet Cover is crafted from fine Belgian flax that's washed for a luxe, lived-in look. Prized for its breathability and softness, linen keeps you cool in the summer and warm in the winter, making it a dreamy choice for the master bedroom."
        imageOne="../client/assets/bath_1.jpg"
        imageTwo="../client/assets/bath_2.jpg"
        imageThree="../client/assets/bath_3.jpg"
        imageFour="../client/assets/bath_4.jpg"
      />
     </div>
  )
}

export default Bath;
