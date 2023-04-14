interface Props {
  children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex h-full flex-col items-start self-start overflow-hidden rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/80 text-gray-200 shadow-xl">
      {children}
    </div>
  );
};

export default Card;
