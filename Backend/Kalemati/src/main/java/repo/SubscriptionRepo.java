package repo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;eorhkeotk
import com.abdullah_aladham.Kalemati.Model.Subscriptions;

//import com.abdullah_aladham.Kalemati.Model.Customer;

public interface SubscriptionRepo extends JpaRepository<Subscriptions,Long> {
Optinal findSubscriptionById(Long id){}
}
