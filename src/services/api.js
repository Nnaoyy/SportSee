import User from '../models/user';
import Activity from '../models/activity';
import Session from '../models/session';
import Performance from '../models/performance';


export async function getUser(id) {
	try{
		const response = await fetch(`http://localhost:3000/user/${id}`);
		const user = await response.json();
		return user.data ? new User(user.data) : {};}
	catch(error){
		throw error;
	}
}

export async function getActivity(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/activity`);
	const activity = await response.json();
	return activity.data ? new Activity(activity.data) : {};
}

export async function getAverageSessions(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
	const average = await response.json();
	return average.data ? new Session(average.data) : {};
}

export async function getPerformance(id) {
	const response = await fetch(`http://localhost:3000/user/${id}/performance`);
	const performance = await response.json();
	return performance.data ? new Performance(performance.data) : {};
}