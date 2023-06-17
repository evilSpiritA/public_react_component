import Header from "./header";

const Eightofwands8:React.FC = () => {
  const headerData = [
    {
      index: 0,
      bgImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      displayText: ['素顔のあなたを','見つけるサロン']
    },
  ]
  const navbarData = [{}]
  return (
    <>
      <Header headerProps={headerData} navProps={navbarData}/>
    </>
  );
};

export default Eightofwands8;

