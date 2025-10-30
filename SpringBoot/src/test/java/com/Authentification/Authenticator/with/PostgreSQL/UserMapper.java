package com.Authentification.Authenticator.with.PostgreSQL;

import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserProfileDto toUserProfileDto(final User user) {
        return new UserProfileDto(user.getEmail(), user.getUsername());
    }
    
}
