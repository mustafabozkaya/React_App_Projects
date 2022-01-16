import React from "react";
import Contact from "./Contact";
import Testimonal from "./Testimonal";
import card_img from "../images/Mini_Card.png";
/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
  return (
    <>
      <div className="contacts">
        <Contact
          img={card_img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={card_img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={card_img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={card_img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={card_img}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
      </div>
      <div>
        <Testimonal punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
        <Testimonal
          setup="I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it."
        />
        <Testimonal
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Testimonal
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy."
        />
        <Testimonal
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
        <Testimonal
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
        />
      </div>
    </>
  );
}

export default App;
