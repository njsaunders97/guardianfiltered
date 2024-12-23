import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-neutral-100 h-32">
            <div className="grid grid-cols-5">
                <div className="flex mt-5 ml-10">
                    <span className="heading-2 text-blue-950">G</span>
                    <span className="heading-2 text-blue-400">F</span>
                </div>
                <div className="flex flex-col col-span-1 col-start-2 col-end-3
                                items-start
                                mt-5
                                ">
                    <h3 className="heading-3">Contact</h3>
                    <button className="footer-text opacity-85 hover:opacity-100">Email</button>
                </div>
                <div className="flex flex-col col-span-1 col-start-3 col-end-4
                                items-start
                                mt-5
                                ">
                    <h3 className="heading-3">About Us</h3>
                    <button className="footer-text opacity-85 hover:opacity-100">GitHub</button>
                </div>
                <div className="flex flex-col col-span-2 justify-center items-center
                                mt-5
                                ">
                    <div className="flex flex-row text-blue-950">
                        <button className="mr-6 opacity-85 ease-linear hover:opacity-100"><GitHubIcon icon={<FaGithub size="30"/>}/></button>
                        <button className="opacity-85 ease-linear hover:opacity-100"><LinkedInIcon icon={<FaLinkedin size="30"/>}/></button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function GitHubIcon({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function LinkedInIcon({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default Footer;