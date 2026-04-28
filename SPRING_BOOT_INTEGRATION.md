# Spring Boot Integration Guide

## Overview

This document explains how the React JS Employee Payroll frontend
integrates with the Spring Boot backend REST API.

## Backend Requirements

- Java 11+
- Spring Boot 2.7+
- Maven or Gradle
- MySQL or H2 database

## Spring Boot REST API Endpoints

| Method | Endpoint                   | Description            |
|--------|----------------------------|------------------------|
| GET    | /api/employees             | Get all employees      |
| GET    | /api/employees/{id}        | Get employee by ID     |
| POST   | /api/employees             | Add new employee       |
| PUT    | /api/employees/{id}        | Update employee        |
| DELETE | /api/employees/{id}        | Delete employee        |

## Frontend Configuration

Update AxiosService.js BASE_URL:
  const BASE_URL = 'http://localhost:8080/api';

## CORS Configuration (Spring Boot)

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET","POST","PUT","DELETE","OPTIONS");
    }
}

## Running Both Servers

Start Spring Boot: mvn spring-boot:run (port 8080)
Start React App:   npm start          (port 3000)