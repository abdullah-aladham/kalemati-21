package service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abdullah_aladham.Kalemati.Model.Customer;

import repo.CustomerRepo;
@Service
public class CustomerService {
private final CustomerRepo customerRepo;

@Autowired
public CustomerService(CustomerRepo customerRepo) {
	this.customerRepo=customerRepo;
}
public Customer addCustomer(Customer customer) {
customer.setCode(UUID.randomUUID().toString());
return customerRepo.save(customer);
}

public List<Customer> findallCustomers(){
	return customerRepo.findAll();
}

public Customer findCustomerById(Long id) {
return customerRepo.findCustomerById(id).orElseThrow(()->new UserNotFoundException("The user id"+id+" is not found"));	
}
public Customer UpdateCutomer(Customer customer) {
	customerRepo.save(customer);
}

public void DeleteCustomer(Long id) {
	customerRepo.deleteCustomerById(id);
}
public void changepass(Customer c) {
	if(ismatch(c.setpass(pass),c.setconf(cpass)==true) {
		customerRepo.save(c);
	}
}
}
