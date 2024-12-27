import React, { useState } from 'react';

function Dashboard() {
    const [proposals, setProposals] = useState([
        { title: "Build a New Library", description: "A proposal to build a new library in town.", votes: 120, status: "Ongoing" },
        { title: "Plant More Trees", description: "Suggest planting more trees in the park.", votes: 200, status: "Approved" },
    ]);

    const handleConnectWallet = () => {
        alert("Wallet connected! (This is a placeholder action)");
    };

    const handleSubmitProposal = () => {
        alert("Redirecting to proposal submission form! (This is a placeholder action)");
    };

    const handleViewProposals = () => {
        alert("Displaying all proposals! (This is a placeholder action)");
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-800 text-gray-200 flex flex-col p-6 shadow-md">
                <h2 className="text-4xl font-extrabold mb-10"></h2>
                <nav>
                    <ul className="space-y-6 text-lg">
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Dashboard</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Create Proposal</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">View Proposals</li>
                        <li className="hover:text-blue-400 transition-colors cursor-pointer">Settings</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <button 
                        onClick={handleConnectWallet} 
                        className="bg-blue-600 hover:bg-blue-500 transition-all text-white py-2 px-6 rounded-lg font-medium">
                        Connect Wallet
                    </button>
                </header>

                {/* Dashboard Content */}
                <section className="p-8">
                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">Create a Proposal</h3>
                            <button 
                                onClick={handleSubmitProposal} 
                                className="bg-gray-900 hover:bg-gray-800 text-gray-100 py-3 px-6 rounded-lg transition-all">
                                Submit Proposal
                            </button>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow">
                            <h3 className="text-2xl font-bold mb-4">See Other Proposals</h3>
                            <button 
                                onClick={handleViewProposals} 
                                className="bg-gray-900 hover:bg-gray-800 text-gray-100 py-3 px-6 rounded-lg transition-all">
                                View Proposals
                            </button>
                        </div>
                    </div>

                    {/* Proposals Table */}
                    <div className="bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h2 className="text-3xl font-extrabold mb-6">Proposals</h2>
                        <table className="table-auto w-full text-left text-gray-200">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="py-3 px-4 text-lg">Title</th>
                                    <th className="py-3 px-4 text-lg">Description</th>
                                    <th className="py-3 px-4 text-lg">Votes</th>
                                    <th className="py-3 px-4 text-lg">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proposals.map((proposal, index) => (
                                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                        <td className="py-3 px-4">{proposal.title}</td>
                                        <td className="py-3 px-4">{proposal.description}</td>
                                        <td className="py-3 px-4">{proposal.votes}</td>
                                        <td className="py-3 px-4">{proposal.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
