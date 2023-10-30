import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AuthContextPro = ({ children }) => {

    const [display, setDisplay] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)

    const [range1, setRange1] = useState(0)
    const [range2, setRange2] = useState(0)
    const [range3, setRange3] = useState(0)
    const [range4, setRange4] = useState(0)
    const [range5, setRange5] = useState(0)
    const [range6, setRange6] = useState(0)

    const [educationDetails, setEducationDetails] = useState({
        web_firstname: "",
        web_lastname: "",
        web_designation: "",
        web_year: "",
        web_description: "",
        graphic_firstname: "",
        graphic_lastname: "",
        graphic_designation: "",
        graphic_year: "",
        graphic_description: ""
    })

    const [UserDetails, setUserDetails] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        designation: "",
        phone: "",
        website: "",
        description: "",
        address: "",
        postalcode: "",
        image: ""
    })

    const [employmentDetails, setEmploymentDetails] = useState({
        dfirstname: "",
        dlastname: "",
        d_designation: "",
        dyear: "",
        d_description: "",
        pfirstname: "",
        plastname: "",
        p_designation: "",
        pyear: "",
        p_description: ""
    })

    const [adobeDetails, setAdobeDetails] = useState({
        adobephotoshop: "",
        adobeillustrator: "",
        adobeindesign: "",
        coraldraw: "",
        threedmax: ""
    })

    const [socailDetails, setSocailDetails] = useState({
        linkdin: "",
        github: "",
        google: "",
        facebook: "",
        pintrest: "",
        twitter: ""
    })

    console.log(socailDetails)

    console.log(educationDetails)
    return (
        <AppContext.Provider value={{
            pageNumber, setPageNumber, range1, setRange1, adobeDetails, setAdobeDetails, socailDetails, setSocailDetails,
            range2, setRange2, range3, setRange3, range4, setRange4, range5, setRange5, range6, setRange6,
            employmentDetails, setEmploymentDetails, UserDetails, setUserDetails, educationDetails, setEducationDetails, display, setDisplay
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AuthContextPro