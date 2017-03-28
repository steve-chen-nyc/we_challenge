import React from 'react';
import Content from './Content';

function Living(props) {
  return (
    <div>
     <Content
       headLine= "Living"
       bodyCopy= "With its modern form, extra-deep seat and crisp tailoring, our spacious Andes Sofa has serious presence but feels airy and light thanks to the thin frame and cast metal legs."
       imageOne="../assets/living_one.jpg"
       imageTwo="../assets/living_two.jpg"
       imageThree="../assets/living_three.jpg"
       imageFour="../assets/living_four.jpg"
     />
    </div>
  )
}

export default Living;
