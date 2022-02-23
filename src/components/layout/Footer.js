import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><a href="https://www.facebook.com/matheus.fornari.3" target="_blank" ><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/fornariii/" target="_blank"><FaInstagram /></a></li>
        <li><a href="https://www.linkedin.com/in/matheus-fornari-9a9727124/" target="_blank"><FaLinkedin /></a></li>
      </ul>
      <p className={styles.copy_right}><span>Costs</span> &copy; 2022</p>
    </footer>
  )
}

export default Footer;