import apiUrl from '../apiConfig'
import axios from 'axios'


//////------ *** USER *** ------//////

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        fullName: credentials.fullName,
        phoneNumber: credentials.phoneNumber,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}


//////------ *** CAR *** ------//////

export const addCar = (user, car, id) => {
  return axios({
    url: apiUrl + `/api/car/${id}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      car: {
        VIN: car.VIN,
        carPlat: car.carPlate,
        color: car.color,
        year: car.year,
        model: car.model,

      }
    }
  })
}

// get all crs
export const showCars = (user) => {
  return axios({
    url: apiUrl + '/api/car',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
//Show Cars By Customer
export const showCustomerCars = (user, id) => {
  return axios({
    url: apiUrl + `/api/car/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Delete Car By ID
export const deleteCarByID = (id, user) => {
  return axios({
    url: apiUrl + `/api/car/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

//////------ *** CUSTOMER *** ------//////

export const addCustomer = (customer, user) => {
  return axios({
    url: apiUrl + '/api/customer',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      customer: {
        customerName: customer.customerName,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
      }
    }
  })
}
export const updateCustomer = (customer, user, id) => {
  return axios({
    url: apiUrl + `/api/customer/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      customer: {
        customerName: customer.customerName,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
      }
    }
  })
}
export const showAllCustomers = (user) => {
  return axios({
    url: apiUrl + '/api/customer',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const deleteCustomerByID = (id, user) => {
  return axios({
    url: apiUrl + `/api/customer/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}


//////*****Work Order *****//////
// get all Work Orders
export const showWorkOrders = (user) => {
  return axios({
    url: apiUrl + '/api/workorder',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
//Show WorkOrder By Car
export const showCarWorkOrder = (user, id) => {
  return axios({
    url: apiUrl + `/api/workorder/${id}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Delete Work By ID
export const deleteWorkOrderByID = (id, user) => {
  return axios({
    url: apiUrl + `/api/workorder/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
//Add work Order
export const addWorkOrder = (workOrder, user) => {
  return axios({
    url: apiUrl + '/api/workOrder',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      workOrder: {
        mechanic: workOrder.mechanic,
        description: workOrder.description,
        cost: workOrder.cost,
      }
    }
  })
}