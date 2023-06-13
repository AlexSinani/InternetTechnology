import { Header } from '../../components/Header';
import './contact.css'

// export default function Contact() {
function Contact() {
    return (
        <main className="mt-6">
            {/* <h1 className="text-2xl font-semibold">Contact page</h1> */}
            <h1 className='header'>Contact page</h1>
            <p className="mt-5">To reach us just write an e-mail!</p>
            <a className='btn' href='mailto: aleksandros.sinani21@umt.edu.al'>Click here</a>
            <p className="mt-5">Contact us by using the phone number below!</p>
            <a className='btn' href='tel: +48531066721'>Click here</a>
        </main>
    );
}

export default Contact;
