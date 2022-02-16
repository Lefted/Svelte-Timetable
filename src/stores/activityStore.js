import { writable } from "svelte/store";

export const activities = writable([]);

const dummyData = [
    {
        id: 1,
        title: "First Activity",
        description: "This is the first activity",
        startDate: "2020-01-01",
        endDate: "2020-01-02",
        participants: [
            {
                id: 1,
                name: "John Doe",
            },
            {
                id: 2,
                name: "Moritz",
            }
        ]
    },
    {
        id: 2,
        title: "Second Activity",
        description: "This is the second activity",
        startDate: "2020-02-01",
        endDate: "2020-02-02",
        participants: [
            {
                id: 3,
                name: "Faximilian",
            },
            {
                id: 2,
                name: "Moritz",
            }
        ]
    }
];

const fetchActivities = async () => {
	// const url = ' test url';
    // const res = await fetch(url);
    // const data = await res.json();
    // const loadedActivities = data;
    activities.set(dummyData);
};
fetchActivities();