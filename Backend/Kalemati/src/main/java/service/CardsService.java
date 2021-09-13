package service;



import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abdullah_aladham.Kalemati.Model.cards;

import repo.CardRepo;
@Service
public class CardsService {
	private final CardRepo cardRepo;
	
	@Autowired
	public CardService(CardRepo cardRepo) {
		this.cardRepo=cardRepo;
	}
public cards addCard(cards card) {
	card.SetCode(UUID.randomUUID().toString());
	return cardRepo.save(card);
}
public List<cards> findAllCards(){
	return cardRepo.findAll();
}
public cards findCardById(long id) {
	return CardRepo.findCardById(id).orElseThrow(()->new CardNotFoundException("the card  that you looking for is not found"));
}
public cards UpdateCard(cards card) {
	cardRepo.save(card);
}
public void DeleteCard(Long id) {
	cardRepo.deleteCardById(id);
}
 
}
