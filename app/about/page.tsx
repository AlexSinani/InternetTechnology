import { Header } from '../../components/Header';
import './about.css'

export default function About() {
    return (
        <main className="mt-6">
            <div>
                {/* <h1 className="text-2xl font-semibold">About</h1> */}
                <h1 className='header'>About</h1>
                <p className="content">Our mission is simple: to inspire a deep appreciation and understanding of the natural world, while fostering a connection between humans and the incredible creatures that inhabit it. With a diverse range of species from around the globe, our zoo offers a captivating journey through various habitats and ecosystems.</p>
            </div>
        </main>
    );
}