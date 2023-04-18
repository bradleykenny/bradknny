interface Props {
  children: JSX.Element | JSX.Element[];
}

function Card(props: Props) {
  const { children } = props;

  return (
    <div className="flex h-full flex-col items-start self-start overflow-hidden rounded-xl bg-gradient-to-br from-gray-600/50 to-gray-800/80 p-1 shadow-xl">
      <div className="h-full rounded-lg bg-gray-900/50 text-gray-200 shadow-inner overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default Card;
