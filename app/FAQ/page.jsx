import React from 'react'
import './page.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const page = () => {
    return (
        <div>

            <div className="faq">

                <span className="heading">
                    Frequently Asked Questions
                </span>
                <div className="QS">
                    <div className="QSONE">

                        <div className="nocode">
                            <span>
                                <h1>Why is Webflow the best nocode tool?</h1><span id='add'><RemoveIcon /></span>
                            </span>
                            <span>
                                <p>
                                    Ut enim ad minim veniam quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    aute irure dolor Ut enim ad minim veniam quis nostrud
                                    exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat aute irure dolor
                                </p>
                            </span>

                        </div>
                        <div className="webfolw">
                            <h1>When did Webflow was founded?</h1>  <span id='subtract'><AddIcon sx={{ fontSize: 24 }}  /></span>
                        </div>
                        <div className="webfolw">
                            <h1>Who are the Webflow founders?</h1>  <span id='subtract'><AddIcon sx={{ fontSize: 24 }} /></span>
                        </div>

                    </div>

                    <div className="QSTWO">
                        <div className="webfolw2">
                            <h1>How to launch a Webflow website?</h1>  <span  id='subtract'><AddIcon sx={{ fontSize: 24 }}  /></span>
                        </div>

                        <div className="webfolw2">
                            <h1>Who founded BRIX Templates?</h1>  <span id='subtract'><AddIcon sx={{ fontSize: 24 }}  /></span>
                        </div>

                        <div className="webfolw2">
                            <h1>Is NoCode the future of the web?</h1>  <span id='subtract'><AddIcon sx={{ fontSize: 24 }}  /></span>
                        </div>



                    </div>

                </div>


            </div>



        </div>
    )
}

export default page
