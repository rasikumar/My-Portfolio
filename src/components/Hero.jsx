
const Hero = () => {
  return (
    <>
    {/* <div className="bg-primarybg">
        <div className="text-[10rem] font-rowdies text-primarytext text-center">
            primary
        </div>
        <div className="text-[10rem] font-rowdies text-secondarytext text-center">
            primary
        </div>
        <div className="text-[10rem] font-rowdies text-primarybtncolor  text-center">
            primary
        </div>
        <div className="text-[10rem] font-rowdies text-secondarybtncolor text-center">
            primary
        </div>
    </div> */}
    <div className="bg-primarybg items-center flex justify-evenly">
        <button className="btn-primary">
            First
        </button>
        <button className="btn-secondary">
            secondary
        </button>
    </div>
    <p className="heading text-center">
        welcome Guy&apos;s 
    </p>
    <p className="para w-96">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem reprehenderit molestiae dolorem dolorum, enim accusantium quisquam rerum ab sit cupiditate nesciunt obcaecati maiores pariatur odit eum, culpa nemo sint sed.
    </p>
    <p className="w-[300px] h-[300px] bg-primarybg shadow-shadow">
        box
    </p>
    </>
    
  )
}

export default Hero
