import React, { useContext, useState } from 'react'
import { AppContext } from './AuthContextPro'
import '../Components/ResponsiveCss/userdetails.css'

const UserDetails = () => {

    const { UserDetails, setUserDetails, setPageNumber } = useContext(AppContext)

    const handleChange = (e) => {
        setUserDetails({
            ...UserDetails,
            [e.target.name]: e.target.value
        })
    }

    // if (UserDetails.firstname != "" && UserDetails.lastname != "" && UserDetails.description != "" && UserDetails.designation != "" &&
    //     UserDetails.address != "" && UserDetails.postalcode != "" && UserDetails.phone != "" && UserDetails.email != "" &&
    //     UserDetails.website != "" && UserDetails.dob != "" && UserDetails.image != "") {
    //     setPageNumber(1)
    // }
    setPageNumber(1)

    // console.log(UserDetails)



    return (
        <div className='w-[70vw] mx-auto user-main'>
            <div className='text-center'>
                <p className='font-bold text-[30px] text-blue-700 details-text'>Fill the Details to make your free Resume</p>
            </div>

            <div className='w-[70vw] h-[1px] mx-auto bg-black mt-5 cross-1'></div>

            <div className='w-[55vw] mx-auto user-1'>
                <div className='main-div mt-10 flex justify-between '>
                    <div className='name flex flex-col gap-2'>
                        <p className='font-bold text-lg'>Name</p>
                        <div className='flex gap-2 two-names'>
                            <div className="firstname">
                                <input type="text"
                                    className='firstname-input border-[1px] firstbox rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                    name='firstname'
                                    value={UserDetails.firstname}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>First Name</p>
                            </div>
                            <div className="lastname">
                                <input type="text"
                                    className='lastname-input border-[1px] rounded-md h-[40px] w-[220px] border-gray-400 bg-transparent'
                                    name='lastname'
                                    value={UserDetails.lastname}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>Last Name</p>
                            </div>
                        </div>
                    </div>

                    <div className="birthdate flex flex-col gap-2">
                        <p className='font-bold text-lg'>Birth date</p>
                        <div className="firstname">
                            <input type="date"
                                className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                name='dob'
                                value={UserDetails.dob}
                                onChange={handleChange}
                            />
                            <p className='text-gray-400'>Date</p>
                        </div>
                    </div>
                </div>


                <div className="designation">
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Email</p>
                            <div className="email">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='email'
                                    value={UserDetails.email}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>example@gmail.com</p>
                            </div>
                        </div>

                        <div className="birthdate flex flex-col gap-2">
                            <p className='font-bold text-lg'>Designation</p>
                            <div className="Designation">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='designation'
                                    value={UserDetails.designation}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>Your desination in company</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="website-phone">
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Phone</p>
                            <div className="Phone">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='phone'
                                    value={UserDetails.phone}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>+123456789</p>
                            </div>
                        </div>

                        <div className="birthdate flex flex-col gap-2">
                            <p className='font-bold text-lg'>Website</p>
                            <div className="firstname">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='website'
                                    value={UserDetails.website}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>www.yourwebsite.com</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="address-image">
                    <div className='main-div mt-10 flex justify-between '>
                        <div className='name flex flex-col gap-2'>
                            <p className='font-bold text-lg'>Image</p>
                            <div className="firstname">
                                <input type="file"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='image'
                                    // value={UserDetails.image}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>Your good image here</p>
                            </div>
                        </div>

                        <div className="birthdate flex flex-col gap-2">
                            <p className='font-bold text-lg'>Description</p>
                            <div className="firstname">
                                <input type="text"
                                    className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                    name='description'
                                    value={UserDetails.description}
                                    onChange={handleChange}
                                />
                                <p className='text-gray-400'>About yourself</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="address">
                    <div className="address-image">
                        <div className='main-div mt-10 flex justify-between '>
                            <div className='name flex flex-col gap-2'>
                                <p className='font-bold text-lg'>Address</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='address'
                                        value={UserDetails.address}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>Province/State Name</p>
                                </div>
                            </div>

                            <div className="birthdate flex flex-col gap-2">
                                <p className='font-bold text-lg'>Postal Code</p>
                                <div className="firstname">
                                    <input type="text"
                                        className='border-[1px] rounded-md h-[40px] w-[320px] border-gray-400 bg-transparent'
                                        name='postalcode'
                                        value={UserDetails.postalcode}
                                        onChange={handleChange}
                                    />
                                    <p className='text-gray-400'>Your Postal code here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails