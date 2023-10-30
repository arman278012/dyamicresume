import React, { useContext, useEffect } from 'react'
import { AppContext } from './AuthContextPro'
import { FaAngleDown } from 'react-icons/fa'
import { BiLogoFacebook, BiSolidChevronRight } from 'react-icons/bi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsGoogle, BsPinterest, BsTwitter, BsVimeo } from 'react-icons/bs'
import './ResponsiveCss/Displaydata.css';


const DisplayData = () => {
  const imagePath = require('../Components/Images/passport-photo.jpg')

  const { socailDetails, educationDetails, employmentDetails, UserDetails, range1, range2, range3, range4, range5, range6,
    adobeDetails } = useContext(AppContext)

  console.log(adobeDetails)

  useEffect(() => {
    const bar_1 = document.querySelector(".bar_1");
    setTimeout(() => {
      bar_1.style.setProperty("--progress", (`${range1}%`));
    }, 500);
  }, [range1])


  useEffect(() => {
    const bar_2 = document.querySelector(".bar_2");
    setTimeout(() => {
      bar_2.style.setProperty("--progress", (`${range2}%`));
    }, 500);
  }, [range2])


  useEffect(() => {
    const bar_3 = document.querySelector(".bar_3");
    setTimeout(() => {
      bar_3.style.setProperty("--progress", (`${range3}%`));
    }, 500);
  }, [range3])

  useEffect(() => {
    const bar_4 = document.querySelector(".bar_4");
    setTimeout(() => {
      bar_4.style.setProperty("--progress", (`${range4}%`));
    }, 500);
  }, [range4])

  useEffect(() => {
    const bar_5 = document.querySelector(".bar_5");
    setTimeout(() => {
      bar_5.style.setProperty("--progress", (`${range5}%`));
    }, 500);
  }, [range5])

  useEffect(() => {
    const bar_6 = document.querySelector(".bar_6");
    setTimeout(() => {
      bar_6.style.setProperty("--progress", (`${range6}%`));
    }, 500);
  }, [range6])



  console.log(educationDetails)
  return (

    <div className='main-container'>
      <div className='flex p-5 gap-3 text-2xl mx-auto w-[60vw] justify-end text-gray-400 top-bar'>
        <a href={socailDetails.github} target='_blank'> <AiFillGithub></AiFillGithub></a>
        <a href={socailDetails.facebook} target='_blank'><BiLogoFacebook></BiLogoFacebook></a>
        <a href={socailDetails.twitter} target='_blank'><BsTwitter></BsTwitter></a>
        <a href={socailDetails.linkdin} target='_blank'><AiFillLinkedin></AiFillLinkedin></a>
        <a href={socailDetails.google} target='_blank'><BsGoogle></BsGoogle></a>
        <a href={socailDetails.pintrest} target='_blank'><BsPinterest></BsPinterest></a>
      </div>
      <div className='bg-white w-[60vw] mx-auto  p-5 header-1'>
        <div className=''>
          <div className=' flex  gap-5  justify-between header-2'>
            <div className='flex gap-5 image-name'>
              <div className='w-[150px] image'>
                <img src={imagePath} alt="" />
              </div>

              <div className='sarah-jefferson'>
                <p className='text-[30px] font-bold sarah-jefferson'>{UserDetails.firstname} {UserDetails.lastname}</p>
                <p className='text-xl font-bold text-blue-400'>{UserDetails.designation}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2  header-3'>
              <div className='flex gap-3'>
                <p className='text-lg font-bold'>Name:</p>
                <p className='text-lg font-semibold'>{UserDetails.firstname} {UserDetails.lastname}</p>
              </div>

              <div className='flex gap-3'>
                <p className='text-lg font-bold'>Date of Birth:</p>
                <p className='text-lg font-semibold'>{UserDetails.dob}</p>
              </div>

              <div className='flex gap-3'>
                <p className='text-lg font-bold'>Address:</p>
                <p className='text-lg font-semibold'>{UserDetails.address},{UserDetails.postalcode}</p>
              </div>

              <div className='flex gap-3'>
                <p className='text-lg font-bold'>Email:</p>
                <p className='text-lg font-semibold'><a href="">{UserDetails.email}</a></p>
              </div>

              <div className='flex gap-3'>
                <p className='text-lg font-bold'>Website:</p>
                <p className='text-lg text-blue-400 font-semibold'><a href="">{UserDetails.website}</a></p>
              </div>
            </div>
          </div>

          <div className='w-[60vw] mx-auto mt-5 p-5 para-1'>
            <p className='text-[16px]'>{UserDetails.description}</p>
          </div>

          <div className='w-[50vw] mt-10 h-[1px] bg-gray-400 mx-auto cross-1'></div>
        </div>
        <div className='flex gap-10 py-5 education-part'>
          <div className='w-[35vw] mt-10 about-2'>
            <div className='flex'>
              <div className='bg-blue-400 flex justify-center items-center p-2'>
                <FaAngleDown className='mt-1 text-white text-[25px]'></FaAngleDown>
              </div>
              <div className='bg-black text-white w-[35vw] p-2 employment'>
                <p className='font-bold'>EMPLOYMENT</p>
              </div>
            </div>

            {/*Employment part is here */}
            <div className=''>
              <div className='mt-10 employe'>
                <div className='absolute bg-blue-400 w-[32px] h-[32px] rounded-full'>
                  <BiSolidChevronRight className='relative top-[6px] left-[5px] text-xl text-white'></BiSolidChevronRight>
                </div>

                <div className='flex justify-between employment-1'>
                  <p className='ml-10 font-bold text-[20px] variation'>{employmentDetails.dfirstname} {employmentDetails.dlastname}</p>
                  <p className='font-bold text-gray-400 text-xl year-1'>{employmentDetails.dyear}</p>
                </div>

                <p className='ml-10 text-[15px] font-semibold text-gray-400'>{employmentDetails.d_designation}</p>

                <p className='mt-5 var-para'>{employmentDetails.d_description}</p>
                <div className='w-[35vw] h-[1px] bg-gray-400 mt-10 mb-10 line'></div>
              </div>

              {/*Copper union */}

              <div className='mt-10'>
                <div className='absolute bg-blue-400 w-[32px] h-[32px] rounded-full'>
                  <BiSolidChevronRight className='relative top-[6px] left-[5px] text-xl text-white'></BiSolidChevronRight>
                </div>

                <div className='flex justify-between cooper-union'>
                  <p className='ml-10 font-bold text-[20px] cooper-name'>{employmentDetails.pfirstname} {employmentDetails.plastname}</p>
                  <p className='font-bold text-gray-400 text-xl cooper-year'>{employmentDetails.pyear}</p>
                </div>

                <p className='ml-10 text-[15px] font-semibold text-gray-400'>{employmentDetails.p_designation}</p>

                <p className='mt-5 cooper-para'>{employmentDetails.p_description}</p>
                <div className='w-[35vw] h-[1px] bg-gray-400 mt-10 mb-10'></div>
              </div>
            </div>

            <div className='w-[35vw] education-part'>
              <div className='flex'>
                <div className='bg-green-400 flex justify-center items-center p-2'>
                  <FaAngleDown className='mt-1 text-white text-[25px]'></FaAngleDown>
                </div>
                <div className='bg-black text-white w-[35vw] p-2 education-line'>
                  <p className='font-bold'>EDUCATION</p>
                </div>
              </div>

              {/*Education-2 part is here */}
              <div className='mt-10 '>
                <div className='absolute bg-green-400 w-[32px] h-[32px] rounded-full'>
                  <BiSolidChevronRight className='relative top-[6px] left-[5px] text-xl text-white'></BiSolidChevronRight>
                </div>

                <div className='flex justify-between lorem-contrary'>
                  <p className='ml-10 font-bold text-[20px] lorem-para'>{educationDetails.web_firstname} {educationDetails.web_lastname}</p>
                  <p className='font-bold text-gray-400 text-xl lorem-year'>{educationDetails.web_year}</p>
                </div>

                <p className='ml-10 text-[15px] font-semibold text-gray-400'>{educationDetails.web_designation}</p>

                <p className='mt-5 web-para'>{educationDetails.web_description}</p>
                <div className='w-[35vw] h-[1px] bg-gray-400 mt-10 mb-10 lorem-line-1'></div>
              </div>


              {/*Education-3 is here */}
              <div className='mt-10 Graphic-Design'>
                <div className='absolute bg-green-400 w-[32px] h-[32px] rounded-full'>
                  <BiSolidChevronRight className='relative top-[6px] left-[5px] text-xl text-white'></BiSolidChevronRight>
                </div>

                <div className='flex justify-between gr-d'>
                  <p className='ml-10 font-bold text-[20px] gr-para'>{educationDetails.graphic_firstname} {educationDetails.graphic_lastname}</p>
                  <p className='font-bold text-gray-400 text-xl gr-year'>{educationDetails.web_year}</p>
                </div>

                <p className='ml-10 text-[15px] font-semibold text-gray-400'>{educationDetails.graphic_designation}</p>

                <p className='mt-5 graphic-para'>{educationDetails.web_description}</p>
                <div className='w-[35vw] h-[1px] bg-gray-400 mt-10 mb-10 gr-line'></div>
              </div>
            </div>

          </div>


          <div className='w-[15vw] flex flex-col PROGRAMMING-SKILLS'>
            <div>
              <p className='font-bold text-xl pr-heading'>PROGRAMMING SKILLS</p>


              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>Wordpress: {range1}%</label>
              </div>
              <div class="progress_1">
                <div class="bar_1"> <p className='opacity-0'>{range1}</p>
                </div>
              </div>


              {/*Progress-2 */}
              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>php: {range2}%</label>
              </div>
              <div class="progress_2">
                <div class="bar_2"> <p className='opacity-0'>{range2}</p>
                </div>
              </div>

              {/*Progress-3 */}
              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>HTML: {range3}%</label>
              </div>
              <div class="progress_3">
                <div class="bar_3"> <p className='opacity-0'>{range3}</p>
                </div>
              </div>

              {/*Progress-4 */}
              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>CSS: {range4}%</label>
              </div>
              <div class="progress_4">
                <div class="bar_4"> <p className='opacity-0'>{range4}</p>
                </div>
              </div>

              {/*Progress-5 */}
              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>MySql: {range5}%</label>
              </div>
              <div class="progress_5">
                <div class="bar_5">
                  <p className='opacity-0'>{range5}</p>
                </div>
              </div>

              {/* Progress-6 */}
              <div className='mt-5'>
                <label htmlFor="" className='font-semibold text-gray-400'>ReactJS:{range6}%</label>
              </div>
              <div class="progress_6">
                <div class="bar_6"><p className='opacity-0'>{range6}</p>
                </div>
              </div>
            </div>
            <div className='mt-10 last'>
              <p className='font-bold text-xl last-gr'>GRAPHICS SKILLS</p>
              {
                adobeDetails.adobephotoshop ? (<div className='flex gap-5 mt-3'>
                  <div className='h-[15px] w-[15px] bg-blue-700 mt-[6px]'></div>
                  <p className='font-semibold text-[15px]'>{adobeDetails.adobephotoshop}</p>
                </div>) : (<></>)
              }


              {
                adobeDetails.adobeillustrator ? (<div className='flex gap-5 mt-2'>
                  <div className='h-[15px] w-[15px] bg-blue-400 mt-[6px]'></div>
                  <p className='font-semibold text-[15px]'>{adobeDetails.adobeillustrator}</p>
                </div>) : (<></>)
              }

              {
                adobeDetails.adobeindesign ? (<div className='flex gap-5 mt-2'>
                  <div className='h-[15px] w-[15px] bg-green-600 mt-[6px]'></div>
                  <p className='font-semibold text-[15px]'>{adobeDetails.adobeindesign}</p>
                </div>) : (<></>)
              }

              {
                adobeDetails.coraldraw ? (<div className='flex gap-5 mt-2'>
                  <div className='h-[15px] w-[15px] bg-yellow-500 mt-[6px]'></div>
                  <p className='font-semibold text-[15px]'>{adobeDetails.coraldraw}</p>
                </div>) : (<></>)
              }

              {
                adobeDetails.threedmax ? (<div className='flex gap-5 mt-2'>
                  <div className='h-[15px] w-[15px] bg-red-700 mt-[6px]'></div>
                  <p className='font-semibold text-[15px]'>{adobeDetails.threedmax}</p>
                </div>) : (<></>)
              }



            </div>
            <div className='mt-10 lang'>
              <p className='font-bold text-xl lang-sk'>LANGUAGE SKILLS</p>
              <div>

                {/*English */}
                <div className='flex gap-3 mt-2'>
                  <p className='font-bold'>English</p>
                  <div className='flex gap-1 ml-[6px]'>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-blue-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-blue-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-blue-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-blue-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full  mt-[3px]'></div>
                  </div>
                </div>

                {/*English */}
                <div className='flex gap-3 mt-2'>
                  <p className='font-bold'>French</p>
                  <div className='flex gap-1 ml-[9px]'>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-green-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-green-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-green-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full  mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full  mt-[3px]'></div>
                  </div>
                </div>

                {/*English */}
                <div className='flex gap-3 mt-2'>
                  <p className='font-bold'>Spain</p>
                  <div className='flex gap-1 ml-[17px]'>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-yellow-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-yellow-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-yellow-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full bg-yellow-400 mt-[3px]'></div>
                    <div className='h-[20px] w-[20px] border-2 border-gray-400 rounded-full mt-[3px]'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayData