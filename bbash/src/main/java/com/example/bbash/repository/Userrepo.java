package com.example.bbash.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bbash.model.User;

public interface Userrepo extends JpaRepository<User,Long>{
    
}
