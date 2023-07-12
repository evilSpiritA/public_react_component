import ScrollToRight from "@/Sean/components/ScrollToRight";
const Main: React.FC = () => {
  const block = [
    {
      index: "0",
      img: "",
      text: "",
    },
  ];
  let _tmp = block.map((ele) => {
    return (
      <section key={ele.index}>
        <div
          className="border w-[300px] h-[400px] rounded-xl shadow-xl"
          style={{ margin: "0 8vh 3vh 0", backgroundColor: "black" }}
        >
          <div className="w-full h-1/2 rounded-t-lg bg-slate-800 ">
            {ele.img}
          </div>
          <div className="w-full h-1/2 rounded-b-lg ">{ele.text}</div>
        </div>
        <div
          className=""
          style={{ width: "200px", backgroundColor: "red" }}
        ></div>
      </section>
    );
  });

  const displayed = (
    <div className="">
      <div style={{ display: "flex", width: "100VW", height: "20vh" }}></div>
      <div style={{ display: "flex", width: "400vw", height: "50vh" }}>
        <div className="flex px-[100px]">{_tmp}</div>
      </div>
    </div>
  );

  return <>{/* <ScrollToRight displayed={displayed} /> */}</>;
};

export default Main;
