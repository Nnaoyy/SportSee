// src/services/dataService.js
import * as api from './api';
import * as mockedData from './mockData';

const USE_MOCKED_DATA = false; //  booléen pour utiliser les données simulées ou l'API

export const getUser = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getUser(userId);
    } else {
        return api.getUser(userId);
    }
};

export const getActivity = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getActivity(userId);
    } else {
        return api.getActivity(userId);
    }
};

export const getAverageSessions = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getAverageSessions(userId);
    } else {
        return api.getAverageSessions(userId);
    }
};

export const getPerformance = async (userId) => {
    if (USE_MOCKED_DATA) {
        return mockedData.getPerformance(userId);
    } else {
        return api.getPerformance(userId);
    }
};