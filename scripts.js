const connectWallet = async () => {
	try {
		if (typeof window.ethereum === 'undefined') {
			alert("MetaMask n'est pas installé !");
			return;
		}

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		console.log("Signer:", signer);
		console.log("Adresse du compte:", await signer.getAddress());
	} catch (error) {
		console.error("Erreur lors de la connexion au portefeuille:", error);
	}
};

document.getElementById("connectButton").addEventListener("click", connectWallet);