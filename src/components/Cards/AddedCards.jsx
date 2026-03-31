import AddedCard from './AddedCard';
import EmptyCard from './EmptyCard';

const AddedCards = ({ selectedCards, setSelectedCards, total, setTotal, countCart, setCountCart }) => {


    // const [total, setTotal] = useState(0);

    return (
        <div className='border border-[#F2F2F2] rounded-2xl w-full p-10 space-y-4'>
            {
                selectedCards.length === 0 ? <EmptyCard></EmptyCard> : (<>
                    <h1 className='text-2xl font-bold text-color'>Your Cart</h1>
                    {
                        selectedCards.map((selectedCard, index) => <AddedCard key={index} index={index} total={total} setTotal={setTotal} selectedCard={selectedCard} selectedCards={selectedCards} setSelectedCards={setSelectedCards} countCart={countCart} setCountCart={setCountCart}></AddedCard>)
                    }
                    <div className='flex justify-between items-center'>
                        <h3 className='text-sec'>Total:</h3>
                        <h2 className='text-2xl font-bold text-color'>${total}</h2>
                    </div></>)
            }

        </div>
    );
};

export default AddedCards;