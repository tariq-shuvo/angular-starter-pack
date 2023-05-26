export interface FetchEmployee {
    status: string;
    message: string;
    data: {
        id: number;
        employee_name: string;
        age: number;
        employee_slary: number;
        profile_image: string | null;
    }
}

export interface AddEmployee {
    name: string;
    age: number;
    salary: number;
}
