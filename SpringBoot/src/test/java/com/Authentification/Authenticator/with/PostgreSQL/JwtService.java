package com.Authentification.Authenticator.with.PostgreSQL;

import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import lombok.RequiredArgsConstructor;
import java.time.Instant;
import java.time.Duration;

@RequiredArgsConstructor
public class JwtService {

    private final String issuer;
    private final Duration ttl;
    private final JwtEncoder jwtEncoder;

    public String generateToken(final String username) {
        final var claimSet = JwtClaimsSet.builder()
                    .subject(username)
                    .issuer(issuer)
                    .expiresAt(Instant.now().plus(ttl))
                .build();

        return jwtEncoder.encode(JwtEncoderParameters.from (claimSet))
            .getTokenValue();
    }
    
}
