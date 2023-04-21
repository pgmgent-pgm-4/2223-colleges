// voornaam, familienaam, pictureUrl, leeftijd, lengte en gewicht.
const Person = ({ firstName, lastName, pictureUrl, age, length, weight}) => {
  const calculateBMI = () => {
    return weight / (length**2);
  };

  return (
    <div className="person">
      <h3>{firstName} {lastName}</h3>
      <picture>
        <img src={pictureUrl} />
      </picture>
      <span>{ calculateBMI() }</span>
    </div>
  )
};

export default Person;