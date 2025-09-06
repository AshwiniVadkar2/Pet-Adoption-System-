package com.cdac.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.PetDetailsDTO;
import com.cdac.dto.PetProfileUpdateDTO;
import com.cdac.dto.DocumentMasterDTO;
import com.cdac.dto.EnquiryResponsedto;
import com.cdac.dto.Response;
import com.cdac.dto.UserDTO;
import com.cdac.pojos.Adoptionform;
import com.cdac.pojos.PetDetails;
import com.cdac.pojos.DocumentMaster;
import com.cdac.pojos.Roles;
import com.cdac.pojos.User;
import com.cdac.service.IAdminService;
import com.cdac.service.IPetDetailsService;
import com.cdac.service.IDocumentMasterService;
import com.cdac.service.IParentService;
import com.cdac.service.IUserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private IPetDetailsService petDetailsService;

	@Autowired
	private IParentService parentService;

	@Autowired
	private IUserService userService;

	@Autowired
	private IAdminService adminService;

	@PostMapping("/addchild")
	public ResponseEntity<?> addPet(PetProfileUpdateDTO petProfileUpdateDTO) {
		User user = userService.findUserById(petProfileUpdateDTO.getUser_id());
		PetDetails pet = PetProfileUpdateDTO.toEntity(petProfileUpdateDTO, user);
		pet = petDetailsService.addPet(pet, petProfileUpdateDTO.getImage());

		String message = "pet Details added successfully";
		return Response.success(message);
	}

	@GetMapping("/showcontactdetails")
	public ResponseEntity<?> showcontactdetails() {
		return new ResponseEntity<>(parentService.showcontactdetails(), HttpStatus.OK);
	}

	@GetMapping("/achilddetails")
	public ResponseEntity<?> findAllPetDetails() {
		List<PetDetails> list = petDetailsService.findAllPet();
		List<PetDetailsDTO> result = new ArrayList<PetDetailsDTO>();
		for (PetDetails pet : list)
			result.add(PetDetailsDTO.fromEntity(pet));
		return Response.success(result);
	}

	// Delete Child By Id
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePetById(@PathVariable("id") int id) {

		PetDetails pet = petDetailsService.findPetById(id);

		if (pet != null) {
			petDetailsService.deletePet(id);
			String message = "pet deleted succesfully";
			return Response.success(message);
		} else {
			String message = "pet not found";
			return Response.error(message);
		}
	}

	// Find Child By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findPetById(@PathVariable("id") int id) {
		PetDetails pet = petDetailsService.findPetById(id);

		if (pet != null) {
			PetDetailsDTO result = PetDetailsDTO.fromEntity(pet);
			return Response.success(result);
		} else {
			String message = "pet not found";
			return Response.error(message);
		}
	}

	// Find By Role
	@GetMapping("/user/{role}")
	public ResponseEntity<?> findUserByRole(@PathVariable("role") Roles role) {
		User user = userService.findByRole(role);
		if (user != null) {
			UserDTO result = UserDTO.fromEntity(user);
			return Response.success(result);
		} else {
			String message = "Parent not found";
			return Response.error(message);
		}
	}

	// update child
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updatePet(@PathVariable("id") int id, PetProfileUpdateDTO petProfileUpdateDTO) {
		PetDetails pet1 = petDetailsService.findPetById(id);
		PetDetails pet2 = petDetailsService.editPet(pet1, petProfileUpdateDTO,
				petProfileUpdateDTO.getImage());
		PetDetailsDTO result = PetDetailsDTO.fromEntity(pet2);
		return Response.success(result);
	}

	// Edit Admin Profile
	@PutMapping("/edit-profile")
	public ResponseEntity<?> updateUserInfo(@RequestBody User user) {
		User user1 = userService.findUserById(user.getId());
		if (user1 != null) {
			user1.setName(user.getName());
			user1.setMobileNumber(user.getMobileNumber());
			user1.setEmail(user.getEmail());
			User updateuser = userService.save(user1);
			ResponseEntity.ok(updateuser);
		}
		return null;
	}

	@GetMapping("/getadoptionformenquiry")
	public ResponseEntity<?> getAdoptionFormEnquiry() {
		List<Adoptionform> form = adminService.getFormEnquiry();
		return new ResponseEntity<>(form, HttpStatus.OK);
	}

	// request to set response for Parent enquiry
	@PutMapping("/setenquiryresponse")
	public ResponseEntity<?> setEnquiryResponse(@RequestBody EnquiryResponsedto response) {
		System.out.println(response.getId());
		String message = adminService.setEnquiryResponse(response);
		
		return new ResponseEntity<>(message, HttpStatus.OK);
	}

	// Get Document from Parent
	@GetMapping("/getdocumentrequest")
	public ResponseEntity<?> getDocumentEnquiry() {
		List<DocumentMaster> form = adminService.getDocumentEnquiry();
		return Response.success(form);
	}

	// request to set response for Parent document
	@PutMapping("/setdocumentresponse/{id}")
	public ResponseEntity<?> setDocumentResponse(@PathVariable("id") int id, @RequestBody EnquiryResponsedto response) {
		String message = adminService.setDocumentResponse(response, id);
		return Response.success(message);
	}

	// Request to count all request
	@GetMapping("/countrequest")
	public ResponseEntity<?> getAllRequestCount() {
		long count = adminService.getAllRequest();
		return new ResponseEntity<>(count, HttpStatus.OK);

	}

	// Count All child
	@GetMapping("/countchild")
	public ResponseEntity<?> getAllPetCount() {
		long count = adminService.getAllPetCount();
		return Response.success(count);

	}

	// Count All Parent
	@GetMapping("/countparent")
	public ResponseEntity<?> getAllParentCount() {
		long count = adminService.getAllParentCount();
		return Response.success(count);

	}

}
