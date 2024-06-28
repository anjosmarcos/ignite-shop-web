import Image from "next/image";
import { HomeContainer, Product } from "@srm/styles/pages/Home";
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from "@srm/assets/1.png";
import camiseta2 from "@srm/assets/2.png";
import camiseta3 from "@srm/assets/3.png";

import "keen-slider/keen-slider.min.css"

export default function Home() {
  // const [sliderRef] = useKeenSlider({
  //   slides: {
  //     perView: 3,
  //     spacing: 48
  //   }
  // })
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={420}/>

        <footer>
          <strong>Camiseta X</strong>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={420}/>

        <footer>
          <strong>Camiseta X</strong>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={420}/>

        <footer>
          <strong>Camiseta X</strong>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={420}/>

        <footer>
          <strong>Camiseta X</strong>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={420}/>

        <footer>
          <strong>Camiseta X</strong>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>
    </HomeContainer>
  );
}
