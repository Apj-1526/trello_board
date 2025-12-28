package com.trello.backend.services;
import com.trello.backend.model.Task;
import com.trello.backend.repository.TaskRepository;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class BoardService {
	
	 private final TaskRepository taskRepository;

	    public BoardService(TaskRepository taskRepository) {
	        this.taskRepository = taskRepository;
	    }

	    public List<Task> getAllTasks() {
	        return taskRepository.findAll();
	    }

	    public Task createTask(Task task) {
	        return taskRepository.save(task);
	    }
	    
	    // ✅ Update title
	    public Task updateTitle(Long id, String title) {
	        Task task = taskRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Task not found"));

	        task.setTitle(title);
	        return taskRepository.save(task);
	    }

	    // ✅ Update status (drag & drop)
	    public Task updateStatus(Long id, String status) {
	        Task task = taskRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Task not found"));

	        task.setStatus(status);
	        return taskRepository.save(task);
	    }


	    public void moveTask(Long id, String status) {
	        Task task = taskRepository.findById(id).orElseThrow(null);
	        task.setStatus(status);
	        taskRepository.save(task);
	    }

	    public void deleteTask(Long id) {
	        taskRepository.deleteById(id);
	    }
}
