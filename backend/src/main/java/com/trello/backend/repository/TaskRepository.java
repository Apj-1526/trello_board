package com.trello.backend.repository;
import com.trello.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
	
	List<Task> findBystatus(String status);

}
