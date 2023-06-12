interface TitleProps {
    titleText: string;
    className?: string;
  }


  export default function Title( props: TitleProps ) {
  return (
    <div className={`flex flex-row justify-center mx-auto ${props.className}`}>
      <div className="m-10 w-5/5 text-center text-4xl">
        <h3>
          {props.titleText}
        </h3>
      </div>
    </div>
  );
}

