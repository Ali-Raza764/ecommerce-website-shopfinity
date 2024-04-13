import Carousel from "./Carousel";

const index = ({ children, title, text  }) => {
  return (
    <div className="w-full h-max flex flex-col gap-y-3 relative">
      <div className="title text-red-500 font-bold text-xl flex items-center gap-x-3">
        <div className="h-8 w-4 border-none rounded-md bg-red-500" />
        <p>{title}</p>
      </div>
      <div className="w-full">
        <h2 className="text-4xl font-bold">{text}</h2>
      </div>

      <Carousel children={children} />
    </div>
  );
};

export default index;
