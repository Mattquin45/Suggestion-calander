package com.Authentification.Authenticator.with.PostgreSQL;

public record RegistrationRequestDto(
    String name,
    String email,
    String password
) {
    
}
