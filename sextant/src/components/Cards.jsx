
const Card = ({ id, ip }) => {
    console.log(id)
    console.log(ip)
    const content = ip ? ip : `Card #${id}`;
    console.log(content)

    return (
        <div className='rounded text-bg-primary p-3 text-center'>
            Card #{id}
        </div>
    );
};

export default Card;