import { FBDate, FBUser, User, dateStr, today } from "./data/Types";

//const PROD_SERVER_ADRESS = "https://torque-hours-v3.onrender.com";
const TEST_SERVER_ADRESS = "http://localhost:3001";

const serverAdresses = {
  'production': TEST_SERVER_ADRESS,
  'development': TEST_SERVER_ADRESS,
  'test': TEST_SERVER_ADRESS
};

const api = (x: String): string => serverAdresses[process.env.NODE_ENV] + "/" + x;

export const getUser = async (id: string): Promise<User> => {
  return (await fetch(api("getUser?id=" + id))).json() as Promise<User>;
};

export const getAllUsers = async (): Promise<User[]> => {
  return (await fetch(api("getAllUsers"))).json() as Promise<User[]>;
};

export const updateUser = async (user: FBUser): Promise<Response> => {
  return await fetch(api("updateUser"), {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
};

export const calculateHoursBetween = (user: User, after: Date, before: Date): number => {
  let hours = 0;
  
  user.meetings.forEach((timestamps, key) => {
    const date: Date = new Date(key);
    if (date >= after && date < before) {
      for (let i = 0; i < Math.floor(timestamps.length / 2); i += 2) {
        hours += Math.abs(new Date(timestamps[i].seconds).getTime() - new Date(timestamps[i + 1].seconds).getTime()) / 3600;
      }
    }
  });

  return (Math.floor(hours * 2) / 2);
};

export const calculateSum = (map: Map<string, number>): number => {
  let sum = 0;

  map.forEach(val => {
    sum += val;
  });

  return sum;
}

export const calculateSignedInTime = (user: User): string => {
  const meeting = user.meetings.get(today());
  if (meeting === undefined || meeting.length % 2 === 0) {
    return "0h";
  }
  const time = new Date((new Date().getTime() - new Date(meeting[meeting.length - 1].seconds * 1000).getTime())).toISOString();
  let hours = Number(time.substring(11,13));
  let minutes = Number(time.substring(14, 16));
  if (hours === 0 && minutes === 0) {
    return "0m";
  }
  if (hours == 0) {
    return minutes + "m";
  }
  if (minutes === 0) {
    return hours + "h";
  }
  return hours + "h " + minutes + "m";
}

export const isSignedIn = (user: User): boolean => {
  const meeting = user.meetings.get(today());
  if (meeting === undefined || meeting.length % 2 === 0) {
    return false;
  }
  return true;
}

export const signInOut = async (user: User): Promise<User> => {
  let timestamps = user.meetings.get(today());
  if (timestamps === undefined) {
    timestamps = [];
  }

  timestamps.push({seconds: new Date().getTime() * 0.001, nanoseconds: 0});
  user.meetings.set(today(), timestamps);

  let fbUser: FBUser = structuredClone(user as FBUser);

  let newTimestamps = Object.fromEntries(user.meetings);
  fbUser.meetings = newTimestamps;

  await updateUser(fbUser);

  return user;
}

export const numMeetingsAttendedBetween = (user: User, after: Date, before: Date): number => {
  let i: number = 0;
  Array.from(user.meetings.keys()).forEach(meeting => {
    const date: Date = new Date(meeting);
    if (date > after && date < before) {
      i++;
    }
  });
  return i;
}

export const numMeetingsBetween = (users: User[], after: Date, before: Date): number => {
  return getMeetingsBetween(users, after, before).length;
}

export const getMeetingsBetween = (users: User[], after: Date, before: Date): string[] => {
  let dates: string[] = [];
  users.forEach(user => {
    Array.from(user.meetings.keys()).forEach(meeting => {
      const date: Date = new Date(meeting);
      if (date > after && date < before) {
        if (!dates.includes(meeting)) {
          dates.push(meeting);
        }
      }
    });
  });
  return dates;
}

export const getAttendenceRate = (user: User, users: User[], after: Date, before: Date): number => {
  return numMeetingsAttendedBetween(user, after, before) / numMeetingsBetween(users, after, before) * 100;
}

export const getAttendence = (users: User[], date: Date): number => {
  let count = 0;
  users.forEach(user => {
    if (user.meetings.get(dateStr(date))) {
      if (new Date(user.created.seconds * 1000) < date) {
        count++;
      }
    }
  });
  return count;
}

export const getTotalAttendenceRate = (users: User[], date: Date): number => {
  return getAttendence(users, date) / users.length;
}

export const getUsersAt = (users: User[], date: Date): User[] => {
  let us: User[] = [];
  users.forEach(user => {
    if (new Date(user.created.seconds * 1000) < date) {
      console.log(date);
      us.push(user);
    }
  });
  return us;
}

export const getRank = (user: User, users: User[]): number => {
  let rank = 1;
  users.forEach(u => {
    if (user !== u) {
      if (calculateHoursBetween(u, new Date(u.created.seconds * 1000), new Date()) > calculateHoursBetween(user, new Date(user.created.seconds * 1000), new Date())) {
        rank++;
      }
    }
  });
  return rank;
}