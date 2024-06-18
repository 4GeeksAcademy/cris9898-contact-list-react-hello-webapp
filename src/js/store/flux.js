import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			apiUrl: "https://playground.4geeks.com/contact/agendas/cristobalJimenez"
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContactList: async () => {
				

				const store = getStore();

				try {
					const response = await fetch(store.apiUrl);
						if (!response.ok) {
							throw new error ("No se cargo la API");
						}
						const data = await response.json();
						
						setStore({contacts: data.contacts});
						
				} catch (error) {
					console.log("Entro en el catch ");
				}
			},
			
			addContactList: async (contact) => {
				const store = getStore();

				try {
					const response = await fetch (
						store.apiUrl + "/contacts",
						{
							method: "POST",
							body: JSON.stringify(
								{...contact}
							),
							headers: {
								"Content-Type": "application/json",
							}
						}
						
					);
					

					if (response.ok) {
						const data = await response.json();
						setStore({ contacts: [...store.contacts, data] });
					}
				} catch (error) {
					console.log("entro en el catch de AddContacList", error);
				}
				
			},


			editContactList: async (id,contact) => {
				const store = getStore();
				const actions = getActions();
				
				console.log(store.apiUrl + "/contacts" + `/${id}`);
				console.log(contact);
				try {
					const response = await fetch(
						store.apiUrl + "/contacts" + `/${id}`,
						{
							method: "PUT",
							body: JSON.stringify(contact),
							headers: {
								"Content-type": "application/json"
							}
						}
					)
					const data = await response.json();

					if (response.ok) {
						actions.getContactList();
					}

				} catch (error) {
					console.log("entro en el catch del edit" , error)
				}
			},


			deleteContactList: async (id) => {
				try {
					const store = getStore();
					const response= await fetch(store.apiUrl + "/contacts" + `/${id}`, 
						{
							method: "DELETE"
						});
						console.log ("despues del responce fetch")
						console.log(response);
					if (!response.ok) {
						alert ("No se puede borrar")
					}else{
						const filteredContacts =  store.contacts.filter((contacts) => contacts.id != id);
						setStore ({contacts: filteredContacts})
					}
				} catch (error) {
					console.log(error);
				}
				
			},

		}
	};
};

export default getState;
