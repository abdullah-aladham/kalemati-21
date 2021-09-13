package repo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
import com.abdullah_aladham.Kalemati.Model.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Long> {

	static void deleteCustomerById(Long id) {}

	Optional  findCustomerById(Long id) {
	}

}
