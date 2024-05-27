import Carousel from "./Carousel";

const index = ({ children, title, text, showButtons }) => {
  return (
    <div className="w-full h-max flex flex-col gap-y-3 relative">
      {title && (
        <>
          <div className="title text-red-500 font-bold text-xl flex items-center gap-x-3">
            <div className="h-8 w-4 border-none rounded-md bg-red-500" />
            <p>{title}</p>
          </div>
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold">{text}</h2>
          </div>
        </>
      )}

      <Carousel showButtons={showButtons}>{children}</Carousel>
    </div>
  );
};

export default index;
