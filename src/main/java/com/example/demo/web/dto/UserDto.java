package com.example.demo.web.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDto {
    @ToString.Exclude
    private Long id;
    private String name;
    private String lastname;
    private String position;
    private String username;
}
