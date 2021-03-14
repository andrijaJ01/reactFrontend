import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ANDRIJA
              <i class='fab fa-adn' />
            </Link>
          </div>
          <small class='website-rights'>ANDRIJA © 2021</small>
          <div class='social-icons'>
            

	  <Link
              class='social-icon-link instagram'
              to='/instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>


            <Link
              class='social-icon-link youtube'
              to='/youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>


            <Link
              class='social-icon-link twitter'
              to='/twitter'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>

            <Link
              class='social-icon-link github'
              to='/github'
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
