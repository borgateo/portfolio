
import React from 'react'

const calculateYears = (date) => {
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default () => (
  <div id="column-content">
    <h1>About</h1>
    <div className="description">
      <p>Born and raised in Venice &ndash; Italy, I graduated from Università degli Studi di Padova with a degree in Computer Science
      in 2007 and have been working with the Web ever since.</p><br/>
      <p>I am a Software Engineer specilized in UI and UX, with more than {calculateYears(new Date(2006, 12, 3, 0, 0, 0, 0))} years of professional experience.</p><br/>
      <p>Currently I live in the colorful and vibrant Fortaleza &ndash; Brazil.</p>
    </div>

    <ul className="social">
      <li>
        <a href="twitter" className="underscore">Github</a>
      </li>
      <li>
        <a href="twitter" className="underscore">LinkedIn</a>
      </li>
      <li>
        <a href="twitter" className="underscore">Twitter</a>
      </li>
      <li>
        <a href="twitter" className="underscore">Instagram</a>
      </li>
    </ul>
  </div>
)
