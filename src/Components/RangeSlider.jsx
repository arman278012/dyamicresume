import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './AuthContextPro';
import './ResponsiveCss/Lastpage.css'



const RangeSlider = () => {


    const { setRange1, setRange2, setRange3, setRange4, adobeDetails, setAdobeDetails,
        setRange5, setRange6, socailDetails, setSocailDetails } = useContext(AppContext)

    const [value1, onChange1] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble1');
        if (ele) {
            ele.style.left = `${Number(value1 / 4)}px`;
        }
    })
    setRange1(value1)


    const [value2, onChange2] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble2');
        if (ele) {
            ele.style.left = `${Number(value2 / 4)}px`;
        }
    })
    setRange2(value2)


    const [value3, onChange3] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble3');
        if (ele) {
            ele.style.left = `${Number(value3 / 4)}px`;
        }
    })
    setRange3(value3)

    
    const [value4, onChange4] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble4');
        if (ele) {
            ele.style.left = `${Number(value4 / 4)}px`;
        }
    })
    setRange4(value4)

    const [value5, onChange5] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble5');
        if (ele) {
            ele.style.left = `${Number(value5 / 4)}px`;
        }
    })
    setRange5(value5)

    const [value6, onChange6] = useState(0);
    useEffect(() => {
        const ele = document.querySelector('.buble6');
        if (ele) {
            ele.style.left = `${Number(value6 / 4)}px`;
        }
    })
    setRange6(value6)

    const handleChange = (e) => {
        setAdobeDetails({
            ...adobeDetails,
            [e.target.name]: e.target.value
        })
    }

    const socialChange = (e) => {
        setSocailDetails({
            ...socailDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="slider-parent flex justify-center items-center flex-col gap-10 main-container">
            <p className='font-bold text-[30px] text-blue-700'>Rate yourself in the following Languages!</p>
            <div className='flex gap-10 range-slider-group-1'>
                <div className='border-2 border-gray-400 p-5 slider-1'>
                    <p>Wordpress</p>
                    <input type="range" min="0" max="100" value={value1}
                        onChange={({ target: { value: radius1 } }) => {
                            onChange1(radius1)
                        }}
                        name='val1'
                    />
                    <div className="buble1 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value1}
                    </div>
                </div>

                <div className='border-2 border-gray-400 p-5'>
                    <p>PHP</p>
                    <input type="range" min="0" max="100" value={value2}
                        onChange={({ target: { value: radius2 } }) => {
                            onChange2(radius2);
                        }}
                    />
                    <div className="buble2 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value2}
                    </div>
                </div>
            </div>

            <div className='flex gap-10 range-slider-group-1'>
                <div className='border-2 border-gray-400 p-5 slider-1'>
                    <p>HTML</p>
                    <input type="range" min="0" max="100" value={value3}
                        onChange={({ target: { value: radius3 } }) => {
                            onChange3(radius3);
                        }}
                    />
                    <div className="buble2 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value3}
                    </div>
                </div>

                <div className='border-2 border-gray-400 p-5'>
                    <p>CSS</p>
                    <input type="range" min="0" max="100" value={value4}
                        onChange={({ target: { value: radius4 } }) => {
                            onChange4(radius4);
                        }}
                    />
                    <div className="buble2 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value4}
                    </div>
                </div>
            </div>

            <div className='flex gap-10 mb-10 range-slider-group-1'>
                <div className='border-2 border-gray-400 p-5 slider-1'>
                    <p>MySql</p>
                    <input type="range" min="0" max="100" value={value5}
                        onChange={({ target: { value: radius5 } }) => {
                            onChange5(radius5);
                        }}
                    />
                    <div className="buble2 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value5}
                    </div>
                </div>

                <div className='border-2 border-gray-400 p-5'>
                    <p>React</p>
                    <input type="range" min="0" max="100" value={value6}
                        onChange={({ target: { value: radius6 } }) => {
                            onChange6(radius6);
                        }}
                    />
                    <div className="buble2 bg-black text-white w-[80px] h-[40px] flex justify-center items-center font-bold">
                        {value6}
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='font-bold text-[30px] text-blue-700'>Please fill your Graphics Skills</p>

                <div className='flex gap-5'>
                    <div>
                        <input
                            type="checkbox"
                            name="adobephotoshop"
                            value="Adobe Photoshop"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Adobe PhotoShop</p>
                    </div>
                </div>
                <div className='flex gap-5'>

                    <div>
                        <input
                            type="checkbox"
                            name="adobeillustrator"
                            value="Adobe Illustrator"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Adobe Illustrator</p>
                    </div>
                </div>
                <div className='flex gap-5'>

                    <div>
                        <input
                            type="checkbox"
                            name="adobeindesign"
                            value="Adobe Indesign"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Adobe Indesign</p>
                    </div>
                </div>
                <div className='flex gap-5'>

                    <div>
                        <input
                            type="checkbox"
                            name="coraldraw"
                            value="Coral Draw"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>Coral Draw</p>
                    </div>
                </div>

                <div className='flex gap-5'>

                    <div>
                        <input
                            type="checkbox"
                            name="threedmax"
                            value="3-D Max"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p>3-D Max</p>
                    </div>
                </div>
            </div>

            <p className='font-bold text-[30px] text-blue-700'>Please fill your social media details here</p>
            <div className='main-div flex gap-10'>

                <div className='name flex flex-col gap-2'>
                    <p className='font-bold text-lg'>LinkdIn</p>
                    <div className='flex gap-2'>
                        <div className="linkdin">
                            <input type="text"
                                className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                                name='linkdin'
                                value={socailDetails.linkdin}
                                onChange={socialChange}
                            />
                            <p className='text-gray-400'>Your Linkdin link here</p>
                        </div>
                    </div>
                </div>

                <div className="birthdate flex flex-col gap-2">
                    <p className='font-bold text-lg'>Github</p>
                    <div className="github">
                        <input type="text"
                            className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                            name='github'
                            value={socailDetails.github}
                            onChange={socialChange}
                        />
                        <p className='text-gray-400'>Your Github link here</p>
                    </div>
                </div>
            </div>

            <div className='main-div flex gap-10'>
                <div className='name flex flex-col gap-2'>
                    <p className='font-bold text-lg'>Google</p>
                    <div className='flex gap-2'>
                        <div className="google">
                            <input type="text"
                                className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                                name='google'
                                value={socailDetails.google}
                                onChange={socialChange}
                            />
                            <p className='text-gray-400'>Google Profile here</p>
                        </div>
                    </div>
                </div>

                <div className="birthdate flex flex-col gap-2">
                    <p className='font-bold text-lg'>Facebook</p>
                    <div className="facebook">
                        <input type="text"
                            className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                            name='facebook'
                            value={socailDetails.facebook}
                            onChange={socialChange}
                        />
                        <p className='text-gray-400'>Facebook profile here</p>
                    </div>
                </div>
            </div>

            <div className='main-div flex gap-10'>
                <div className='name flex flex-col gap-2'>
                    <p className='font-bold text-lg'>Twitter</p>
                    <div className='flex gap-2'>
                        <div className="twitter">
                            <input type="text"
                                className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                                name='twitter'
                                value={socailDetails.twitter}
                                onChange={socialChange}
                            />
                            <p className='text-gray-400'>Twitter Account here</p>
                        </div>
                    </div>
                </div>

                <div className="birthdate flex flex-col gap-2">
                    <p className='font-bold text-lg'>Pintrest</p>
                    <div className="pintrest">
                        <input type="text"
                            className='border-[1px] rounded-md h-[40px] w-[300px] border-gray-400 bg-transparent'
                            name='pintrest'
                            value={socailDetails.pintrest}
                            onChange={socialChange}
                        />
                        <p className='text-gray-400'>Pinterset Account here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeSlider