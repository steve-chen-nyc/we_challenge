import React from 'react';
import Content from './Content';

function Kitchen(props) {
  return (
    <div>
     <Content
       headLine= "Kitchen"
       bodyCopy= "Made from solid marble, this utensil holder keeps kitchens tidy and stylish."
       imageOne="../assets/kitchen_one.jpg"
       imageTwo="../assets/kitchen_two.jpg"
       imageThree="../assets/kitchen_three.jpg"
       imageFour="../assets/kitchen_four.jpg"
     />
    </div>
  )
}

export default Kitchen;
