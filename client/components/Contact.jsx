import React, { useState} from 'react';

const Contact = () => {
  return (
    <>
    <div className="contact">
    <header>CONTACT</header>

    <form id="form" class="topBefore">
      <input id="name" type="text" placeholder="NAME" />
      <input id="email" type="text" placeholder="E-MAIL" />
      <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
      <input id="submit" type="submit" value="GO!" />
    </form>
    </div>
    </>
  )
}

export default Contact