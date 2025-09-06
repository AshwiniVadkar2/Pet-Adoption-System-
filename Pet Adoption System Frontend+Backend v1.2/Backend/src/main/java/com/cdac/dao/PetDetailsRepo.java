package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.pojos.PetDetails;

public interface PetDetailsRepo extends JpaRepository<PetDetails, Integer> {

	
}
