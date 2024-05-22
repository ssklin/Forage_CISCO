
const Card = ({ cardTitle, ip }) => {
    return (
        <div className='rounded text-bg-primary p-3 text-center'>
            {cardTitle}
            <div className="mx-auto mt-2 p-3">
                {ip}
            </div>
        </div>
    );
};

export default Card;