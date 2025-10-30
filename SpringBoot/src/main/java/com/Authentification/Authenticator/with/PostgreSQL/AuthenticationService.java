package com.Authentification.Authenticator.with.PostgreSQL;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthenticationResponseDto authenticate(
        final AuthenticationRequestDto request) {
        
        final var authToken = UsernamePasswordAuthenticationToken
            .unauthenticated(request.email(), request.password());

        final var authentication = authenticationManager
          .authenticate(authToken);

        final var token = jwtService.generateToken(request.email());
        return new AuthenticationResponseDto(token);
    }
}
