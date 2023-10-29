package com.codecool.backend.service;

import com.codecool.backend.dto.AppUserDto;
import com.codecool.backend.mapper.AppUserMapper;
import com.codecool.backend.model.AppUser;
import com.codecool.backend.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;

    private final AppUserMapper appUserMapper;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository, AppUserMapper appUserMapper) {
        this.appUserRepository = appUserRepository;
        this.appUserMapper = appUserMapper;
    }

    public AppUserDto register(AppUserDto userDto) {
        AppUser user = appUserMapper.toEntity(userDto);
        appUserRepository.save(user);
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
