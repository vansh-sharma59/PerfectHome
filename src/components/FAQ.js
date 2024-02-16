import React from "react";
import Accordion from "./Accordion";

function FAQ() {
  return (
    <div>
      <Accordion
        title="RESTAURANT"
        answer="You can find the best restaurants in the neighbourhood so you can enjoy your time with your family."
      />
      <Accordion
        title="SCHOOL"
        answer="There are plenty of schools around your neighbourhood so your child studies are not compromised."
      />
      <Accordion
        title="SHOPPING MALL"
        answer="No need to worry for your grocery items we have got you covered. With the best in the area shopping malls. "
      />
      <Accordion
        title="Hospitals"
        answer="Got any emergency, get immediate help from the hospitals around you."
      />
      <Accordion
        title="PARKS"
        answer="The parks around you are created keeping in mind the needs of all age groups. Children can play and the elderly can exercise. There's something for everyone."
      />
    </div>
  );
}

export default FAQ;
