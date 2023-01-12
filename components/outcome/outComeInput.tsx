function outComeInput(){
    return(
        <div className="grid row-span-1 border-2 border-gray-100 grid-cols-20">
            <div className="col-span-4 bg-yellow-600">
                <label className="inline-block mb-2 text-gray-700 form-label">날짜</label>
                <input
                type="text"
                className="
                    form-control
                    block                
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Example label"
                />
            </div>
            <div className="col-span-4 bg-yellow-300">
                <label className="inline-block mb-2 text-gray-700 form-label">금액</label>
                <input
                type="text"
                className="
                    form-control
                    block                
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Example label"
                />
            </div>
            <div className="col-span-4 bg-yellow-100">
                <label className="inline-block mb-2 text-gray-700 form-label">Example textarea</label>
                <input
                type="text"
                className="
                    form-control
                    block                
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Example label"
                />
                <textarea
                className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                placeholder="Your message"
                ></textarea>
            </div>
            <div className="col-span-4 bg-yellow-300">
                <label className="inline-block mb-2 text-gray-700 form-label">분류</label>
                <input
                type="text"
                className="
                    form-control
                    block                
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Example label"
                />
            </div>
            <div className="col-span-4 bg-yellow-300">
                <label className="inline-block mb-2 text-gray-700 form-label">태그</label>
                <input
                type="text"
                className="
                    form-control
                    block                
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlInput1"
                placeholder="Example label"
                />
            </div>
        </div>
    )
}

export default outComeInput;