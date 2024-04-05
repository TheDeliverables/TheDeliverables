import React from 'react'
import "./Footer.scss"


export default function Footer() {
  return (
    <footer className='footer'>
        <hr className='footer__divider' />
        <section className='footer__text-container'>
            <p2 className="footer__text">Refund Policy</p2>
            <p2 className="footer__text">Shipping Policy</p2>
            <p2 className="footer__text">Privacy Policy</p2>
            <p2 className="footer__text">Terms of Service</p2>
        </section>
    </footer>
  )
}
