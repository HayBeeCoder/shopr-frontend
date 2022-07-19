
const Product = () => {

    return (
        <>
            <div className='md:w-2/3 grid grid-cols-2 gap-4'>
                {
                    [1, 2, 3, 4].map(image => (
                        <div className='pb-[100%] bg-primary-100'>
                            {/* <img src={image} alt={data?.data.title} width="300" height="300" className="bg-orange-300 w-full " /> */}
                        </div>
                    ))
                }


            </div>
            <div  className=' flex-shrink self-stretch w-[30%]' >
                <p className=' h-4 w-full bg-primary-100' >

                </p>
                <div className='  my-3 h-9 w-full bg-primary-100'>
               </div>

                <div>
                    <p>color: </p>
                    <div className='bg-primary-100 w-full h-9'>

                    </div>
                </div>

                <p>

                </p>
            </div>
        </>
    )
}

export default Product