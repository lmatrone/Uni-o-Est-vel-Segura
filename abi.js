const   contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "Proponente2",
				"type": "address"
			}
		],
		"name": "AceitarUniao",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Proponente1",
				"type": "address"
			}
		],
		"name": "ProporUniao",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "UniaoProposta",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "UniaoAceita",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "Proponente1",
				"type": "address"
			},
			{
				"name": "NomeProponente1",
				"type": "string"
			},
			{
				"name": "Proponente2",
				"type": "address"
			},
			{
				"name": "NomeProponente2",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]
    
    if (network === "4") {
        contractAddress = "0x1c910a3c45698a8c2352c55e17b33572b7c1c3a9"; 
    
    } else {
    contractAddress = "0x1c910a3c45698a8c2352c55e17b33572b7c1c3a9"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
