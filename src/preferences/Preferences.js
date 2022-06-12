import React from 'react'
import logo1 from '../img/1.png'
import logo2 from '../img/2.png'
import logo3 from '../img/3.png'
import logo4 from '../img/4.png'
import './preferences.css'

function Preferences() {
  return (
    <section className='preferences'>
        <div className="preference">
            <div className="preference__img"><img src={logo1} alt="" /></div>
            <div className="preference__text">9000 pet supplies</div>
        </div>
        <div className="preference">
            <div className="preference__img"><img src={logo2} alt="" /></div>
            <div className="preference__text">5% first order discount</div>
        </div>
        <div className="preference">
            <div className="preference__img"><img src={logo3} alt="" /></div>
            <div className="preference__text">free shipping within Сalifornia</div>
        </div>
        <div className="preference">
            <div className="preference__img"><img src={logo4} alt="" /></div>
            <div className="preference__text">4 retail stores</div>
        </div>
    </section>
  )
}

export default Preferences