import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContextPro'

const Employment = () => {

    const { employmentDetails, setEmploymentDetails, setPageNumber } = useContext(AppContext)

    const handleChange = (e) => {
        setEmploymentDetails({
            ...employmentDetails,
            [e.target.name]: e.target.value
        })
    }

    // if (employmentDetails.dfirstname != "" && employmentDetails.dlastname != "" && employmentDetails.dyear != "" && employmentDetails.d_description != ""
    //     && employmentDetails.d_designation != "" && employmentDetails.pfirstname != "" && employmentDetails.plastname != "" &&
    //     employmentDetails.p_description != "" && employmentDetails.p_description != "" && employmentDetails.p_designation != "") {
    //     setPageNumber(2)
    // }
    setPageNumber(2)

    // console.log(employmentDetails)



    return (
        <div className='w-[70vw] mx-auto'>
            <div className='text-center'>
                <p className='font-bold text-[30px] text-blue-700'>Fill the Employment Details here</p>
            </div>

            <div className='w-[70vw] h-[1px] mx-auto bg-black mt-5'></div>

            <div className='w-[55vw] mx-auto'>
                <div className='border-[1px] border-gray-400 mt-5 p-5'>
                    <div><p className='font-bold text-center text-red-700'>Department Details</p></div>
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Name</p>
                            <div className='flex gap-2'>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='dfirstname'
                                        value={employmentDetails.dfirstname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>First Name</p>
                                </div>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='dlastname'
                                        value={employmentDetails.dlastname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>Last Name</p>
                                </div>
                            </div>
                        </div>


                        <div className="birthdate flex flex-col gap-2">
                            <p className='font-bold text-lg'>Designation</p>
                            <div className="firstname">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='d_designation'
                                    value={employmentDetails.d_designation}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>position in the company</p>
                            </div>
                        </div>
                    </div>


                    <div className="designation">
                        <div className='main-div mt-10 flex justify-between '>
                            <div className='name flex flex-col gap-2'>
                                <p className='font-bold text-lg'>Year</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='dyear'
                                        value={employmentDetails.dyear}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>From to which</p>
                                </div>
                            </div>

                            <div className="birthdate flex flex-col gap-2">
                                <p className='font-bold text-lg'>Discription</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='d_description'
                                        value={employmentDetails.d_description}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>About Youorself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='border-[1px] border-gray-400 mt-5 p-5'>
                    <div><p className='font-bold text-center text-red-700' >Programming Details</p></div>
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Name</p>
                            <div className='flex gap-2'>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='pfirstname'
                                        value={employmentDetails.pfirstname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>First Name</p>
                                </div>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='plastname'
                                        value={employmentDetails.plastname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>Last Name</p>
                                </div>
                            </div>
                        </div>


                        <div className="birthdate flex flex-col gap-2">
                            <p className='font-bold text-lg'>Designation</p>
                            <div className="firstname">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='p_designation'
                                    value={employmentDetails.p_designation}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>position in the company</p>
                            </div>
                        </div>
                    </div>


                    <div className="designation">
                        <div className='main-div mt-10 flex justify-between '>
                            <div className='name flex flex-col gap-2'>
                                <p className='font-bold text-lg'>Year</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='pyear'
                                        value={employmentDetails.pyear}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>From to which</p>
                                </div>
                            </div>

                            <div className="birthdate flex flex-col gap-2">
                                <p className='font-bold text-lg'>Discription</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='p_description'
                                        value={employmentDetails.p_description}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>About Youorself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employment