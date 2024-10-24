const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Complete Onboarding",
        "description": "Finish the onboarding process and submit necessary documents.",
        "date": "2024-10-24",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Meeting",
        "description": "Attend the meeting with the client to discuss project requirements.",
        "date": "2024-10-20",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming product launch.",
        "date": "2024-10-18",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Update Website Content",
        "description": "Refresh the content on the company's main website.",
        "date": "2024-10-25",
        "category": "Web Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Review Security Logs",
        "description": "Analyze recent security logs for any unusual activity.",
        "date": "2024-10-23",
        "category": "IT Security"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Design Wireframes",
        "description": "Create wireframes for the new mobile app interface.",
        "date": "2024-10-19",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review code submitted by team members for quality assurance.",
        "date": "2024-10-23",
        "category": "Software Development"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create Marketing Strategy",
        "description": "Draft a new marketing strategy for the upcoming quarter.",
        "date": "2024-10-27",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team Training",
        "description": "Conduct training sessions for new team members.",
        "date": "2024-10-15",
        "category": "HR"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Budget Planning",
        "description": "Prepare the budget plan for the next fiscal year.",
        "date": "2024-10-10",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Inventory Check",
        "description": "Perform a thorough check of the current inventory stock.",
        "date": "2024-10-24",
        "category": "Operations"
      }
    ]
  }
];


    const admin = [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))

}
      
 
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('emplyees'));
  // console.log(JSON.parse(localStorage.getItem('admin')));
  console.log(employees)
}