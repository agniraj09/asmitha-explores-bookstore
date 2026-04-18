package com.asmitha.bookstore.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class SelfPingService {
    private static final Logger logger = LoggerFactory.getLogger(SelfPingService.class);
    private static final String PING_URL = "https://asmitha-explores-bookstore.onrender.com/ping";
    private final RestTemplate restTemplate = new RestTemplate();

    // Every 10 minutes
    @Scheduled(fixedRate = 600_000)
    public void pingSelf() {
        try {
            String response = restTemplate.getForObject(PING_URL, String.class);
            logger.info("Self-ping successful: {}", response);
        } catch (Exception e) {
            logger.warn("Self-ping failed: {}", e.getMessage());
        }
    }
}

