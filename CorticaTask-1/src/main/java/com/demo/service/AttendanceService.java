package com.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Attendance;
import com.demo.repository.AttendanceRepository;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance markAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    public List<Attendance> getAttendanceHistory(Long userId) {
        return attendanceRepository.findByUserId(userId);
    }
}