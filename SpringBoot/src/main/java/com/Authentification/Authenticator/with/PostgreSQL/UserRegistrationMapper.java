package com.Authentification.Authenticator.with.PostgreSQL;

import org.springframework.stereotype.Component;

@Component
public class UserRegistrationMapper {
    public User toEntity(RegistrationRequestDto registrationRequestDto) {
        final var user = new User();

        user.setEmail(registrationRequestDto.email());
        user.setUsername(registrationRequestDto.name());
        user.setPassword(registrationRequestDto.password());

        return user;
    }

    public RegistrationResponseDto toRegistrationResponseDto(
        final User user) {
        
            return new RegistrationResponseDto(
                user.getEmail(), user.getUsername());
            
    }
    
}
