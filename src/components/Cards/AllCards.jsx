import Card from './Card';

const AllCards = ({ cardInfos, selectedCards, setSelectedCards, countCart, setCountCart }) => {

    setCountCart(selectedCards.length);
    return (
        <div className='mx-2 md:mx-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mt-5 md:mt-7'>


            {
                cardInfos.map(cardInfo => <Card selectedCards={selectedCards} setSelectedCards={setSelectedCards} cardInfo={cardInfo}></Card>)
            }

        </div>
    );
};

export default AllCards;