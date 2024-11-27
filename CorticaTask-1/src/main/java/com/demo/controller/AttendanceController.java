package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Attendance;
import com.demo.service.AttendanceService;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/mark")
    public ResponseEntity<Attendance> markAttendance(@RequestBody Attendance attendance) {
        return ResponseEntity.ok(attendanceService.markAttendance(attendance));
    }

    @GetMapping("/history/{userId}")
    public ResponseEntity<List<Attendance>> getAttendanceHistory(@PathVariable Long userId) {
        return ResponseEntity.ok(attendanceService.getAttendanceHistory(userId));
    }
}

