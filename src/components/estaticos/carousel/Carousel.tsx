import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


function Carousel() {

    const items = [
        
        <img src="https://github.com/Brian-Schneider.png" alt="" />,
        <img src="https://github.com/ElizangelaXavierS.png" alt="" />,
        <img src="https://github.com/RafaelGG1.png" alt="" />,
        <img src="https://github.com/samuelnovaiscavelho.png" alt="" />,
        <img src="https://github.com/ThayaneAlmeida.png" alt="" />,
        <img src="https://github.com/viniciusaprazeres.png" alt="" />,
        <img src="https://github.com/YasminCozaciuc.png" alt="" />,
    
    ]



    const responsivo = {
        0: {
            items: 1,
        },
        1024: {
            items: 3,
            itemsFit: 'contain',
        }
    }

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            infinite
            responsive={responsivo}
            disableDotsControls={true}
            disableButtonsControls={true}
            autoPlayInterval={2500} />

    )
}

export default Carousel