package com.cdac.service;

import java.util.List;

import com.cdac.dto.PetProfileUpdateDTO;
import com.cdac.pojos.PetDetails;
import com.cdac.pojos.User;

import org.springframework.web.multipart.MultipartFile;

public interface IPetDetailsService {

	PetDetails update(int id, PetDetails pet);

	List<PetDetails> findAllPet();

	PetDetails findPetById(int id);

	void deletePet(int id);

	PetDetails addPet(PetDetails pet, MultipartFile image);

	PetDetails editPet(PetDetails pet, PetProfileUpdateDTO petDetailsDTO, MultipartFile image);

}
