import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'



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
   
   <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
      
     
    </div>
  )
}

export default LektionEins