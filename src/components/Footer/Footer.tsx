import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <footer>
            <div>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faX} />
                </a>
            </div>
            <div className="footer-links">
            <a href="/contact">Contact</a>
                <a href="/contact">Contact</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div>© 2025 LogosWithin. All rights reserved.</div>
        </footer>
    )
}