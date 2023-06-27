let token = '344b92a120929c63acdf29ce589fcc3706c41ffbd302d443'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://vehicle-inventory-site.onrender.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://vehicle-inventory-site.onrender.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://vehicle-inventory-site.onrender.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }
        
        return await response.json();
    },
    delete: async(id:string) => {
        const response = await fetch(`https://vehicle-inventory-site.onrender.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control_allow_origin': '*',
            }
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }
        
        return;
        
    }
}