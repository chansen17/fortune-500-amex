import {useWindowWidth} from '@react-hook/window-size'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const cards = [
    {
        title: 'American Express Cash Magnet Card',
        image: '/cash-magnet.jpeg'
    },
    {
        title: 'American Express Gold Card',
        image: '/gold-card.jpeg'
    },
    {
        title: 'American Express Platinum Card',
        image: '/platinum-card.jpeg'
    },
    {
        title: 'American Express Green Card',
        image: '/green-card.jpeg'
    },
    {
        title: 'American Express Blue Cash Everyday Card',
        image: '/blue-cash-everyday.jpeg'
    },
    {
        title: 'American Express Blue Cash Preferred',
        image: '/blue-cash-preferred.jpeg'
    },
    {
        title: 'American Express EveryDay Card',
        image: '/amex-everyday.jpeg'
    },
    {
        title: 'American Express EveryDay Preffered Card',
        image: '/amex-preffered.jpeg'
    },
    {
        title: 'American Express Delta SkyMiles Card',
        image: '/gold-delta-skymiles.jpeg'
    },
];

export default function Cards() {
    const width = useWindowWidth();

    const options = {
        type: 'slide',
        perPage: width < 760 ? 1 : 3,
        arrows: true,
        pagination: true,
    }

  return (
    <div className="w-full min-h-[50vh] h-full bg-gray-100">
        <div className="max-w-[1300px] mx-auto p-5 text-center">
            <h2 className="pt-6 text-4xl font-extralight">Find the Card that's best for you.</h2>
            <p className="pt-4" >Whether you're looking to take your next adventure or enjoy experiences locally, you can find a Card that suits your lifestyle.</p>
            <div className="my-8">
                <Splide
                aria-label="My Favorite Images"
                options={options}
                >
                {cards.map((card, i) => (
                    <SplideSlide key={i} className="py-12">
                        <div className="bg-white mx-2">
                            <img className="w-full" src={card.image} alt={card.title}/>
                            <div className="text-left pt-4 pb-12">
                                <p className="text-blue-600 px-4 font-bold">{card.title}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
                </Splide>
                <button className="my-6 py-4 px-6 text-white rounded bg-blue-600 hover:bg-blue-700 max-w-[290px] w-full">View all Cards</button>
            </div>
        </div>
    </div>
  )
}
