import React from 'react';
import { FaStar } from 'react-icons/fa6';

export const items = [
  {
    id: 1,
    imageSrc:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Salad',
    title: 'Salad',
    description: 'Fresh & sweet',
    price: '$ 5',
  },
  {
    id: 2,
    imageSrc:
      'https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Fish',
    title: 'Fish',
    description: 'Fresh & sweet',
    price: '$ 5',
  },
  {
    id: 3,
    imageSrc:
      'https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    altText: 'Pizza',
    title: 'Pizza',
    description: 'Fresh & sweet',
    price: '$ 5',
  },
];

const CardComponent = ({ imageSrc, altText, title, description, price }) => (
  <div className="card">
    <div className="card__image">
      <img src={imageSrc} alt={altText} />
    </div>
    <div className="card__info">
      <div className="card__info--title">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="gold" />
          ))}
        </div>
      </div>
      <div className="card__info--price">
        <p>{price}</p>
      </div>
    </div>
  </div>
);

const Menu = () => {
  return (
    <section className="container" id="menu">
      <h2 className="our-menu">Our Menu!</h2>
      <div className="art-board__container">
        {items.map((item) => (
          <CardComponent
            key={item.id}
            imageSrc={item.imageSrc}
            altText={item.altText}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
