const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts : []

		
		},
		actions: {
		
			
			getContacts : () =>{

				fetch("https://playground.4geeks.com/contact/agendas/Ibrahim/contacts")
				.then(response =>{
					if(!response.ok){
						throw Error("Error  trying to get info")
					}
					return response.json();
				})
				.then(data =>{
					console.log(data.contacts)
					setStore({contacts : data.contacts})
				})
				.catch(error => console.log("Error : ", error))
			},
			deleteContact: (contactId) =>{
				fetch(`https://playground.4geeks.com/contact/agendas/Ibrahim/contacts/${contactId}`,{
					method: "DELETE"
				})
				.then(response =>{
					if(response.status !== 204){
						console.log("Error! Contact not found!")
						throw Error (response.statusText)
					}
					getActions().getContacts()
				})
				.catch(error => console.log(error))
			},
			createContact: (name,email,phone,address) =>{

				let contact ={
					name: name,
					phone:phone,
					email:email,
					address:address
				}
				
				let options= {
					method: 'POST', 
					body: JSON.stringify(contact), 
					headers: {
					  'Content-Type': 'application/json'
					}
				}

				fetch(`https://playground.4geeks.com/contact/agendas/Ibrahim/contacts`,options)
				.then(response => {
					if(!response.ok) throw Error(response.statusText)
						return response.json()
				})
				.then(response=> console.log("success" ,response))
				.catch(error=> console.log(error))
					
				
			}
		}
	};
};

export default getState;
