package com.codecool.backend.controller;

import com.codecool.backend.dto.AppUserDto;
import com.codecool.backend.model.AuthenticationResponse;
import com.codecool.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/appusers")
public class AppUserController {

    private final AppUserService appUserService;


    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/register")
    public ResponseEntity<AppUserDto> registerNewUser(@RequestBody AppUserDto user) {
        return new ResponseEntity<>(appUserService.register(user), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticateUser(@RequestBody AppUserDto user) {
        return new ResponseEntity<>(appUserService.authenticate(user), HttpStatus.OK);
    }


}
