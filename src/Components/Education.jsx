import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContextPro'
import '../Components/ResponsiveCss/Education.css'

const Education = () => {

    const { educationDetails, setEducationDetails, setPageNumber } = useContext(AppContext)

    const handleChange = (e) => {
        setEducationDetails({
            ...educationDetails,
            [e.target.name]: e.target.value
        })
    }

    // if (educationDetails.web_firstname != "" && educationDetails.web_lastname != "" && educationDetails.web_description != ""
    //     && educationDetails.web_designation != "" && educationDetails.web_year != "" & educationDetails.graphic_description != ""
    //     && educationDetails.graphic_designation != "" && educationDetails.graphic_firstname != "" && educationDetails.graphic_lastname != ""
    //     && educationDetails.graphic_year != "") {
    //     setPageNumber(3)
    // }
    setPageNumber(3)
    // else (setPageNumber(0))

    // console.log(educationDetails)


    return (
        <div className='w-[70vw] mx-auto main-container'>
            <div className='text-center '>
                <p className='font-bold text-[30px] text-blue-700 main-text'>Fill the Educational Details here</p>
            </div>

            <div className='w-[70vw] h-[1px] mx-auto bg-black mt-5'></div>

            <div className='w-[55vw] mx-auto Web-Details'>
                <div className='border-[1px] border-gray-400 mt-5 p-5 Web-Details-2'>
                    <div><p className='font-bold text-center text-red-700'>Web Details</p></div>
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Name</p>
                            <div className='two-names flex gap-2'>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] firstbox-name rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='web_firstname'
                                        value={educationDetails.web_firstname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>First Name</p>
                                </div>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] lastbox-name rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='web_lastname'
                                        value={educationDetails.web_lastname}
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
                                    className='border-[1px] Designation-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='web_designation'
                                    value={educationDetails.web_designation}
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
                                        className='border-[1px] Year-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='web_year'
                                        value={educationDetails.web_year}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>From to which</p>
                                </div>
                            </div>

                            <div className="birthdate flex flex-col gap-2">
                                <p className='font-bold text-lg'>Discription</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] Discription-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='web_description'
                                        value={educationDetails.web_description}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>About Youorself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-[1px] border-gray-400 mt-5 p-5'>
                    <div><p className='font-bold text-center text-red-700' >Graphics Details</p></div>
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Name</p>
                            <div className='flex gap-2 two-names'>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] firstbox-name rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='graphic_firstname'
                                        value={educationDetails.graphic_firstname}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>First Name</p>
                                </div>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] lastbox-name rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                        name='graphic_lastname'
                                        value={educationDetails.graphic_lastname}
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
                                    className='border-[1px] Designation-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='graphic_designation'
                                    value={educationDetails.graphic_designation}
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
                                        className='border-[1px] Year-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='graphic_year'
                                        value={educationDetails.graphic_year}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>From to which</p>
                                </div>
                            </div>

                            <div className="birthdate flex flex-col gap-2">
                                <p className='font-bold text-lg'>Discription</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] Discription-box rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='graphic_description'
                                        value={educationDetails.graphic_description}
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

export default Education