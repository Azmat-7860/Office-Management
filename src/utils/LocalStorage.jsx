const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix homepage bug",
        category: "Development",
        description: "Resolve issue with homepage loading speed.",
        isComplete: false,
        isFailed: false,
        newTask: true,
        isActive: true,
      },
      {
        title: "Update UI for dashboard",
        category: "Design",
        description: "Redesign the admin dashboard for better UX.",
        isComplete: false,
        isFailed: false,
        newTask: true,
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Create marketing campaign",
        category: "Marketing",
        description: "Plan and execute a new social media campaign.",
        isComplete: true,
        isFailed: false,
        newTask: false,
        isActive: false,
      },
      {
        title: "Fix bugs in mobile app",
        category: "Development",
        description: "Resolve all high-priority bugs in the app.",
        isComplete: false,
        isFailed: false,
        newTask: true,
        isActive: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write blog post",
        category: "Marketing",
        description: "Write a blog post for our website launch.",
        isComplete: true,
        isFailed: false,
        newTask: false,
        isActive: false,
      },
      {
        title: "Design promotional graphics",
        category: "Design",
        description: "Design social media graphics for a new product launch.",
        isComplete: false,
        isFailed: true,
        newTask: false,
        isActive: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Server maintenance",
        category: "Development",
        description: "Perform routine maintenance on the production servers.",
        isComplete: false,
        isFailed: false,
        newTask: true,
        isActive: true,
      },
      {
        title: "Organize company event",
        category: "Management",
        description: "Coordinate the upcoming annual company event.",
        isComplete: true,
        isFailed: false,
        newTask: false,
        isActive: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Test new features",
        category: "QA",
        description: "Conduct QA tests for the newly implemented features.",
        isComplete: false,
        isFailed: true,
        newTask: false,
        isActive: false,
      },
      {
        title: "Write documentation",
        category: "Development",
        description: "Document the new API endpoints for the development team.",
        isComplete: false,
        isFailed: false,
        newTask: true,
        isActive: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const empData = JSON.parse(localStorage.getItem("employee"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { empData, adminData };
  // console.log(empData, adminData);
};
