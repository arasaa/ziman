import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PreviousNextMethods from './PreviousNextMethods ';
import EmblaCarousel from './EmblaCarousel';



const LektionEins = () => {
  const greet = [
    {
        greeding: "Hallo User",
        start: "lass uns starten, click Next um zu starten",
        id: 1,
    },
 
    {
        givingWord: "Kennenlernen",
        wordExplanation: "التعارف",
        id: 2,
    },
    {
        bot: "Ich bin ZimanBot, und du?",
        user: "",
        id: 3,
    }
];




  const list = greet.map(gree => <>
  <p key={gree.id}>{gree.greeding}</p>
  <p>{gree.start}</p>
  </>
  )

  const listOne = greet.map(gree => <>
    <p key={gree.id}>{gree.givingWord}</p>
    <p>{gree.wordExplanation}</p>
    </>
    ) 

    //CALLBACK NEXT && PREVIEWS
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
  return (
   
    <div className="embla">
   
   <EmblaCarousel />
     
    </div>
  )
}

export default LektionEins