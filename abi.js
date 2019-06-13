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
				"name": "",
				"type": "address"
			}
		],
		"name": "EnviarValor",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msg",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Presenteado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "divorcio",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "saqueAntecipado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "Proponente1",
				"type": "address"
			},
			{
				"name": "RGproponente1",
				"type": "string"
			},
			{
				"name": "CPFproponente1",
				"type": "string"
			},
			{
				"name": "Proponente2",
				"type": "address"
			},
			{
				"name": "RGproponente2",
				"type": "string"
			},
			{
				"name": "CPFproponente2",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]
    
    if (network === "4") {
        contractAddress = "0x1022e2ea3d08c51bedfdac5750ce236b7a8a2972"; 
    
    } else {
    contractAddress = "0x1022e2ea3d08c51bedfdac5750ce236b7a8a2972"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
