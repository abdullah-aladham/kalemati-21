package repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abdullah_aladham.Kalemati.Model.cards;

public interface CardRepo extends JpaRepository<cards,Long> {

	static Object findCardById(long id) {

	}

	static void deleteCardById(Long id) {
		// TODO Auto-generated method stub
		
	}

}
