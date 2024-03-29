// const tradingCardData = [
//   {
//     name: 'Balloonicorn',
//     skill: 'video games',
//     imgUrl: '/static/img/balloonicorn.jpg',
//     cardId: 1,
//   },
//   {
//     name: 'Float',
//     skill: 'baking pretzels',
//     imgUrl: '/static/img/float.jpg',
//     cardId: 2,
//   },
//   {
//     name: 'Llambda',
//     skill: 'knitting scarves',
//     imgUrl: '/static/img/llambda.jpg',
//     cardId: 3,
//   },
//   {
//     name: 'Off-By-One',
//     skill: 'climbing mountains',
//     imgUrl: '/static/img/off-by-one.jpeg',
//     cardId: 4,
//   },
//   {
//     name: 'Seed.py',
//     skill: 'making curry dishes',
//     imgUrl: '/static/img/seedpy.jpeg',
//     cardId: 5,
//   },
//   {
//     name: 'Polymorphism',
//     skill: 'costumes',
//     imgUrl: '/static/img/polymorphism.jpeg',
//     cardId: 6,
//   },
//   {
//     name: 'Short Stack Overflow',
//     skill: 'ocean animal trivia',
//     imgUrl: '/static/img/shortstack-overflow.jpeg',
//     cardId: 7,
//   },
//   {
//     name: 'Merge',
//     skill: 'bullet journaling',
//     imgUrl: '/static/img/merge.png',
//     cardId: 8,
//   },
// ];
function TradingCard(props) { 
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} alt="profile" />
      <p>Skill: {props.skill} </p>
    </div>
  );
}
// From Lab: "Since cards changing over time, we'll use state in this app"

function TradingCardContainer() {

  // const floatCard = {
  //   name: 'Float',
  //   skill: 'baking pretzels',
  //   imgUrl: 'static/img/float.jpg'
  // };
  
  const [cards, setCards] = React.useState([])

  const tradingCards = [];

  React.useEffect(() => {
  fetch('/cards.json')
    .then((response) => response.json())
    .then((responseData) => {
      setCards(responseData.cards);
  });
}, []);

  
  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.cardId}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />, // <TradingCard />
    );
  }

  return <div className="grid">{tradingCards}</div>;

}

ReactDOM.render(<TradingCardContainer />, document.getElementById('container'));

//Example of useEffect below
React.useEffect(() => {
  document.title = `You clicked ${count} times`;
})