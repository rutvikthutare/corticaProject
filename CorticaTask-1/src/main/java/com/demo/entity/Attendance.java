package com.demo.entity;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private LocalDateTime timestamp;

    private String selfieUrl;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getSelfieUrl() {
		return selfieUrl;
	}

	public void setSelfieUrl(String selfieUrl) {
		this.selfieUrl = selfieUrl;
	}

	@Override
	public String toString() {
		return "Attendance [id=" + id + ", userId=" + userId + ", timestamp=" + timestamp + ", selfieUrl=" + selfieUrl
				+ "]";
	}
    
}

