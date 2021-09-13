package service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.abdullah_aladham.Kalemati.Model.Subscriptions;

import repo.SubscriptionRepo;

@Service
public class SubsService {
private final SubscriptionRepo subRepo;
 
@Autiwired
public SubService(SubscriptionRepo subRepo) {
	this.subRepo=subRepo;
}
public Subscriptions addsub(Subscriptions sub) {
	sub.SetCode(UUID.randomUUID().toString());
	return subRepo.save(sub);
}
public List<Subscriptions> findAllSubs(){
	return subRepo.findAll();
}
public Subscriptions findSubscriptionById(Long id) {
	return SubscriptionRepo.findSubscriptionById(id).orElseThrow(()->new SubscriptionNotFoundExceprion("The Subscription that you are looking is not found") );
}
public Subscriptions updateSubscription(Subscriptions sub) {
	subRepo.save(sub);
}
}
