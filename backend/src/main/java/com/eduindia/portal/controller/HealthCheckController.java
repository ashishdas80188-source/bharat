package com.eduindia.portal.controller;

import com.eduindia.portal.dto.response.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@Tag(name = "Health", description = "System Health and Diagnostics API")
public class HealthCheckController {

    @GetMapping("/health")
    @Operation(summary = "Backend service health check", description = "Returns operational status of the EduIndia API server")
    public ResponseEntity<ApiResponse<Map<String, Object>>> healthCheck() {
        Map<String, Object> status = new HashMap<>();
        status.put("service", "EduIndia Admission Portal Backend");
        status.put("status", "UP");
        status.put("version", "1.0.0");
        status.put("environment", "Development");

        return ResponseEntity.ok(ApiResponse.success("EduIndia backend API is operational", status));
    }
}
