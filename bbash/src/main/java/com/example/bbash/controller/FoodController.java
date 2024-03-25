package com.example.bbash.controller;

import com.example.bbash.model.Food;
import com.example.bbash.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/foods")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping
    public List<Food> getAllFoods() {
        return foodService.getAllFoods();
    }

    @GetMapping("/{id}")
    public Food getFoodById(@PathVariable long id) {
        return foodService.getFoodById(id);
    }

    @PostMapping
    public Food createFood(@NonNull @RequestBody Food food) {
        return foodService.createFood(food);
    }

    @PutMapping("/{id}")
    public Food updateFood(@PathVariable long id, @RequestBody Food food) {
        return foodService.updateFood(id, food);
    }

    @DeleteMapping("/{id}")
    public void deleteFood(@PathVariable long id) {
        foodService.deleteFood(id);
    }
}
