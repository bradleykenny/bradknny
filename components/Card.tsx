interface Props {
    children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
    const { children } = props;

    return (
        <div className=" flex h-full flex-col items-start self-start overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-400 p-1 dark:from-gray-600/50 dark:to-gray-800/80">
            <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200/50 text-gray-800 shadow-inner dark:bg-gray-900/50 dark:text-gray-200">
                {children}
            </div>
        </div>
    );
};

export default Card;
