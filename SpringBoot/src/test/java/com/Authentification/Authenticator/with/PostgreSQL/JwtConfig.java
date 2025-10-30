
package com.Authentification.Authenticator.with.PostgreSQL;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.beans.factory.annotation.Value;
import lombok.Getter;
import lombok.Setter;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.time.Duration;

import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;


@Configuration
@Setter
@Getter
@ConfigurationProperties(prefix = "jwt")
public class JwtConfig {

    private RSAPrivateKey privateKey;

    private RSAPublicKey publicKey;

    private Duration ttl;


    //this is to sign in
    @Bean
    public JwtEncoder jwtEncoder() {
        final var jwk = new RSAKey.Builder(publicKey)
            .privateKey(privateKey).build();

        return new NimbusJwtEncoder(
          new ImmutableJWKSet<>(new JWKSet(jwk)));
    }

    //this is to verify the JWT token
    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withPublicKey(publicKey).build();
    }

    
    @Bean
    public JwtService jwtService(
        @Value("${spring.application.name}") final String appName, 
        final JwtEncoder jwtEncoder) {

        return new JwtService(appName, ttl, jwtEncoder);
    }

}
