package com.trello.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trello.backend.model.Task;
import com.trello.backend.services.BoardService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class BoardController {
	

    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return boardService.getAllTasks();
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return boardService.createTask(task);
    }

    @PutMapping("/tasks/title/{id}")
    public Task updateTitle(
            @PathVariable Long id,
            @RequestBody Map<String, String> body
    ) {
        return boardService.updateTitle(id, body.get("title"));
    }

    
    @PutMapping("/tasks/{id}")
    public void moveTask(@PathVariable Long id, @RequestParam String status) {
        boardService.moveTask(id, status);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        boardService.deleteTask(id);
    }

	
}
