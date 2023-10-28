package com.codecool.backend.controller;

import com.codecool.backend.dto.AppUserDto;
import com.codecool.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public AppUserDto registerNewUser(@RequestBody AppUserDto user) {
        return appUserService.register(user);
    }
}
