package com.example.bbash.controller;

import com.example.bbash.model.Add;
import com.example.bbash.service.AddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/adds")
public class AddController {

    @Autowired
    private final AddService addService;

    
    public AddController(AddService addService) {
        this.addService = addService;
    }

    @GetMapping
    public ResponseEntity<List<Add>> getAllAdds() {
        List<Add> adds = addService.getAllAdds();
        return new ResponseEntity<>(adds, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Add> getAddById(@PathVariable("id") long id) {
        Optional<Add> add = addService.getAddById(id);
        return add.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Add> createAdd(@NonNull @RequestBody Add add) {
        Add createdAdd = addService.saveAdd(add);
        return new ResponseEntity<>(createdAdd, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddById(@PathVariable("id") long id) {
        addService.deleteAddById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
