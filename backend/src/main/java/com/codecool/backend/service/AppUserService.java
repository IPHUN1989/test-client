package com.codecool.backend.service;

import com.codecool.backend.configuration.JwtService;
import com.codecool.backend.dto.AppUserDto;
import com.codecool.backend.mapper.AppUserMapper;
import com.codecool.backend.model.AppUser;
import com.codecool.backend.model.AuthenticationResponse;
import com.codecool.backend.model.Role;
import com.codecool.backend.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class AppUserService{

    private final AppUserRepository appUserRepository;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;

    private final AppUserDetailsService appUserDetailsService;
    private final AppUserMapper appUserMapper;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository, AuthenticationManager authenticationManager, JwtService jwtService, PasswordEncoder passwordEncoder, AppUserDetailsService appUserDetailsService, AppUserMapper appUserMapper) {
        this.appUserRepository = appUserRepository;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.appUserDetailsService = appUserDetailsService;
        this.appUserMapper = appUserMapper;
    }

    public AppUserDto register(AppUserDto userDto) {
        AppUser user = appUserMapper.toEntity(userDto);
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        appUserRepository.save(user);
        user.setPassword("");
        return appUserMapper.toDto(user);
    }


    public AuthenticationResponse authenticate(AppUserDto appUserDto){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        appUserDto.userName(),
                        appUserDto.password()
                )
        );
        UserDetails user = appUserDetailsService.loadUserByUsername(appUserDto.userName());
        AppUser foundUser = appUserRepository.findAppUserByUserName(appUserDto.userName())
                .orElseThrow(NoSuchElementException::new);
        var jwtToken = jwtService.generateToken(user, foundUser.getUserName());
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
