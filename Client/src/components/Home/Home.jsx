import React from 'react';
import heroImage from '../../logo/3.png'; // Replace with your actual image path
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-linear text-[#CAF0F8] py-20 relative overflow-hidden">
                {/* Decorative Background Blocks */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#0077B6] opacity-20 rounded-lg animate-float"></div>
                <div className="absolute top-20 right-20 w-40 h-40 bg-[#023E8A] opacity-30 rounded-lg animate-drift"></div>
                <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-[#0077B6] opacity-25 rounded-lg animate-floatSlower"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#023E8A] opacity-15 rounded-lg animate-driftSlower"></div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center relative z-10">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>
                            Decentralized Governance Redefined
                        </h1>
                        <p className="text-lg mb-6" style={{ fontFamily: 'Lexend Giga, sans-serif' }}>
                            GovChain empowers citizens with transparency, accountability, and secure decision-making.
                            Propose, vote, and track in real-time on a blockchain-powered platform.
                        </p>
                        <button
                            onClick={handleClick}
                            className="px-6 py-3 text-xl bg-gradient-to-r from-[#00b6c1] to-[#00a1a0] text-white rounded-md border-2 border-[#00b6c1] bg-opacity-20 hover:scale-110 hover:from-[#008e8a] hover:to-[#00b6c1] hover:border-[#008e8a] transition-transform duration-300"


                        >
                            Connect Wallet
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-full max-w-lg mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
