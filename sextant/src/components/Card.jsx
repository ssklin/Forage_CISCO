
const Card = ({ cardTitle, child}) => {
    return (
        <div className='rounded text-bg-primary p-3 text-center'>
            {cardTitle}
            <div className="mx-auto mt-2 p-3">
                {child}
            </div>
        </div>
    );
};

export default Card;