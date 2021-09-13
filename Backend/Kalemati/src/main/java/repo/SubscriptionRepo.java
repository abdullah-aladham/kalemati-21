package repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abdullah_aladham.Kalemati.Model.Subscriptions;

//import com.abdullah_aladham.Kalemati.Model.Customer;

public interface SubscriptionRepo extends JpaRepository<Subscriptions,Long> {

}
