const Greeting = ({ message = 'Greetings Earthlings' }) => {
  return (
    <blockquote>{message}</blockquote>
  )
};

export default Greeting;