import SliderSplitImage from '@/Ryan/components/slider-split-image'

const SliderSplitImagePage = () => {
  // const data = [
  //   {
  //     index: 0,
  //     displayText: 'something111',
  //     bgImg: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  //   },
  //   {
  //     index: 1,
  //     displayText: 'something222',
  //     bgImg: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  //   },
  //   {
  //     index: 2,
  //     displayText: 'something333',
  //     bgImg: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
  //   },
  //   {
  //     index: 3,
  //     displayText: 'something4444',
  //     bgImg: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  //   },
  // ];

  const data = [
    {
      index: 0,
      bgImg: 'https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920',
      displayText: 'いちいちかわいい'
    },
    {
      index: 1,
      bgImg: 'https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920',
      displayText: '愛おしいアンティークと'
    },
    {
      index: 2,
      bgImg: 'https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920',
      displayText: 'グリーンに囲まれた隠れ家のような空間で'
    },
    {
      index: 3,
      bgImg: 'https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920',
      displayText: '愛おしい'
    },
    {
      index: 4,
      bgImg: 'https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920',
      displayText: 'そのときの気分に合わせて'
    },
  ]

  return (
    <>
      <div className="wrapper">
        <SliderSplitImage propsData={data} />
      </div>
    </>
  );
};

export default SliderSplitImagePage;