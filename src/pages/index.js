import Link from 'next/link';
import Layout from '../components/Layout';
import About from '../components/About';
import Groups from '../components/Groups';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';
import Judges from '../components/Judges';
import Hosts from '../components/Hosts';
import Mentors from '../components/Mentors';
import Info from '../components/Info';
import Contact from '../components/Contact';

import '../components/css/bootstrap.min.css';
import '../components/css/agency.css';
import '../components/css/animate.min.css';
import '../components/font-awesome/css/font-awesome.min.css';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const IndexPage = () => (

    <Layout>
        <div className="container">
            <p className="about-subheader-for-images">
                Hacking and caring with
                </p>
            <div className="row">
                <div className="text-center">
                    <a href="http://vanstartupweek.ca/" target="_blank"><img className="img-sponsor-small about-img-left"
                        src="img/logos/VSW_logo.jpg" alt="VSW Logo" /></a>
                    <a href="https://ttt.studio" target="_blank"><img className="img-sponsor-small about-img-right"
                        src="img/logos/ttt-logo.png" alt="ViDIA Logo" /></a>
                </div>
            </div>
        </div>
        <About />
        <div className='section-divider'></div>

        <Groups />
        <div className='section-divider'></div>

        <Schedule />
        <div className='section-divider'></div>

        <Sponsors />
        <div className='section-divider'></div>

        <Judges />
        <div className='section-divider'></div>

        <Hosts />
        <div className='section-divider'></div>

        <Mentors />
        <div className='section-divider'></div>

        <Info />
        <div className='section-divider'></div>

        <Contact />
    </Layout>
);

export default IndexPage