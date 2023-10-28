package com.codecool.backend.mapper;

import com.codecool.backend.dto.AppUserDto;
import com.codecool.backend.model.AppUser;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface AppUserMapper {
    AppUser toEntity(AppUserDto appUserDto);

    AppUserDto toDto(AppUser appUser);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    AppUser partialUpdate(AppUserDto appUserDto, @MappingTarget AppUser appUser);
}