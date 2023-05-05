let abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snils",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dep",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "number",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "issue_date",
				"type": "string"
			}
		],
		"name": "AddDiplom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthday",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snils",
				"type": "string"
			}
		],
		"name": "AddStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snils",
				"type": "string"
			}
		],
		"name": "GetDiploma",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "number",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "department",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issue_date",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "is_active",
						"type": "bool"
					}
				],
				"internalType": "struct Diplomas.Diplom[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snils",
				"type": "string"
			}
		],
		"name": "GetStudent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "fio",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "birthday",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "exists",
						"type": "bool"
					}
				],
				"internalType": "struct Diplomas.Student",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "new_fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "old_fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "snils",
				"type": "string"
			}
		],
		"name": "UpdateStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]