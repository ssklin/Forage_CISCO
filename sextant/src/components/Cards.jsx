
const Card = ({ id, ip }) => {
    const content = ip ? ip : `Card #${id}`;
    
    return (
        <div className='rounded text-bg-primary p-3 text-center'>
            Card #{id} - {content}
        </div>
    );
};

export default Card;