const About = () => {
  return (
    <section className="our-story-container" id="about">
      <div className="grid our-story container grid">
        <div className="our-story-description">
          <h2>Our Story</h2>
          <p>
            Little Lemon was founded in 2010 by two brothers, Mario and Adrian.
            They were born and raised in Chicago, and their love for
            Mediterranean cuisine inspired them to open a restaurant that would
            bring the flavors of the Mediterranean to the Windy City. Little
            Lemon is a cozy family-owned restaurant that offers traditional
            Mediterranean dishes with a modern twist. Our chefs use fresh
            ingredients to create delicious and healthy meals that will
            transport you to the sunny shores of the Mediterranean. We are
            committed to providing our customers with an unforgettable dining
            experience, and we take pride in offering exceptional service in a
            warm and welcoming atmosphere.
          </p>
        </div>
        <div className="our-story-chefs">
          <img
            src="/chefs-mario-and-adrian_1.jpg"
            alt="Chefs Mario and Adrian #1"
          />
          <img
            src="/chefs-mario-and-adrian_2.jpg"
            alt="Chefs Mario and Adrian #2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
