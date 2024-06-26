import { USER_MAIN_DATA,  USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../datas/data';
import User from '../models/user';
import Activity from '../models/activity';
import Session from '../models/session';
import Performance from '../models/performance';

export const getUser = async (userId) => {
    try {
        const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        if (!user) {
            throw new Error('User not found');
        }
        return new User(user);
    } catch (error) {
        throw error;
    }
};

export const getActivity = async (userId) => {
    try {
        const userActivity = USER_ACTIVITY.find(activity => activity.userId === parseInt(userId));
        if (!userActivity) {
            throw new Error('User activity not found');
        }
        return new Activity(userActivity);
    } catch (error) {
        throw error;
    }
};

export const getAverageSessions = async (userId) => {
    try {
        const userAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId));
        if (!userAverageSessions) {
            throw new Error('User average sessions not found');
        }
        return new Session(userAverageSessions);
    } catch (error) {
        throw error;
    }
};

export const getPerformance = async (userId) => {
    try {
        const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId));
        if (!userPerformance) {
            throw new Error('User performance not found');
        }
        return new Performance(userPerformance);
    } catch (error) {
        throw error;
    }
};