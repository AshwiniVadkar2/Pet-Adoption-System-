package com.cdac.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dao.PetDetailsRepo;
import com.cdac.dto.PetProfileUpdateDTO;
import com.cdac.pojos.PetDetails;
import com.cdac.pojos.User;
import com.cdac.utils.StorageService;

import org.springframework.web.multipart.MultipartFile;

@Transactional
@Service
public class PetDetailsServiceImpl implements IPetDetailsService {

	@Autowired
	private PetDetailsRepo petrepo;

	@Autowired
	private StorageService storageService;

	@Override
	public PetDetails update(int id, PetDetails pet) {

		Optional<PetDetails> existingPet = petrepo.findById(id);
		if (existingPet.get() != null) {

			existingPet.get().setAge(pet.getAge());
			existingPet.get().setBloodGroup(pet.getBloodGroup());
			existingPet.get().setColourComplexity(pet.getColourComplexity());
			existingPet.get().setDeficiency(pet.getDeficiency());
			existingPet.get().setEducation(pet.getEducation());
			existingPet.get().setGender(pet.getGender());
			existingPet.get().setMedicalHistory(pet.getMedicalHistory());
			existingPet.get().setName(pet.getName());
			existingPet.get().setOther(pet.getOther());
			existingPet.get().setStatus(pet.getStatus());
			return petrepo.save(existingPet.get());
		}
		return null;
	}

	@Override
	public List<PetDetails> findAllPet() {
		return petrepo.findAll();
	}

	@Override
	public PetDetails findPetById(int id) {
		Optional<PetDetails> pet = petrepo.findById(id);
		return pet.orElse(null);
	}

	@Override
	public void deletePet(int id) {
		petrepo.deleteById(id);
	}

	@Override
	public PetDetails addPet(PetDetails pet, MultipartFile image) {
		String fileName = storageService.store(image);
		pet.setImage(fileName);
		return petrepo.save(pet);
	}

	@Override
	public PetDetails editPet(PetDetails pet, PetProfileUpdateDTO petDetailsDTO, MultipartFile image) {
		String fileName = storageService.store(image);
		pet.setImage(fileName);
		pet.setAge(petDetailsDTO.getAge());
		pet.setBloodGroup(petDetailsDTO.getBloodGroup());
		pet.setColourComplexity(petDetailsDTO.getColourComplexity());
		pet.setDeficiency(petDetailsDTO.getDeficiency());
		pet.setEducation(petDetailsDTO.getEducation());
		pet.setGender(petDetailsDTO.getGender());
		pet.setMedicalHistory(petDetailsDTO.getMedicalHistory());
		pet.setName(petDetailsDTO.getName());
		pet.setOther(petDetailsDTO.getOther());
		pet.setStatus(petDetailsDTO.getStatus());

		return petrepo.save(pet);
	}

}
