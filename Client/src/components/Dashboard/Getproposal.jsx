import React, { useState } from "react";

const ViewProposals = () => {
  const [proposals, setProposals] = useState([
    {
      title: "Build a New Library",
      description: "A proposal to build a library in the downtown area.",
      votes: 120,
      status: "Ongoing",
      voted: false,
    },
    {
      title: "Plant More Trees",
      description: "A proposal to plant more trees across the city.",
      votes: 200,
      status: "Approved",
      voted: false,
    },
    {
      title: "Build a New Playground",
      description: "A proposal to build a new playground for children.",
      votes: 150,
      status: "Pending",
      voted: false,
    },
  ]);

  const [alertMessage, setAlertMessage] = useState(null);

  const handleVote = (index) => {
    const newProposals = [...proposals];
    const selectedProposal = newProposals[index];

    if (selectedProposal.voted) {
      // Set an alert message to show after render
      setAlertMessage("You can cast only one vote for each proposal.");
      return;
    }

    selectedProposal.votes += 1;
    selectedProposal.voted = true;
    setProposals(newProposals);
  };

  React.useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage(null); // Reset the alert message after displaying
    }
  }, [alertMessage]);

  return (
    <div
      className="view-proposals-container"
      style={{
        background:
          "linear-gradient(to right, #03045E, #03346E, #021526), radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <div className="flex justify-center items-start pt-8">
        <div className="grid grid-cols-3 gap-6 px-8 w-full max-w-screen-xl">
          {proposals.map((proposal, index) => (
            <div
              key={index}
              className="proposal-card bg-[#f1f1f1] backdrop-blur-lg rounded-lg shadow-md p-6 text-black"
              style={{
                minWidth: "250px",
                backgroundColor: "#f9fafb",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">{proposal.title}</h3>
              <p className="text-sm mb-4">{proposal.description}</p>
              <div className="flex justify-between text-sm mb-4">
                <div>Votes: {proposal.votes}</div>
                <div>Status: {proposal.status}</div>
              </div>
              <button
                onClick={() => handleVote(index)}
                className="w-full py-2 text-white rounded-md"
                style={{
                  backgroundColor: "#00a1a0",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#008e8d")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00a1a0")}
                disabled={proposal.voted}
              >
                {proposal.voted ? "Voted" : "Vote"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProposals;
