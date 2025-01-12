# Resume Builder App

A **Resume Builder App** built using **React**, **Next.js**, and **Tailwind CSS** that allows users to input their data in JSON format and generate a beautifully styled resume. The app also provides the functionality to download the generated resume as a PDF using **html2pdf**.

## Features

- **Dynamic Resume Generation**: Add your data in JSON format to create a customized resume.
- **PDF Export**: Download your resume as a PDF with a single click.
- **Modern Design**: Styled using Tailwind CSS for a sleek and responsive UI.
- **Built with Next.js**: Ensures fast rendering and excellent performance.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For responsive and modern styling.
- **html2pdf**: For converting HTML content to PDF.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd resume-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Add your resume data in JSON format.
2. Preview the generated resume.
3. Click the "Download PDF" button to save your resume as a PDF.

## JSON Format

The app accepts a structured JSON format to generate the resume. Below are some example JSON structures:

### **Profile 1**

```json
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "contact": {
    "email": "johndoe@example.com",
    "phone": "123-456-7890",
    "linkedin": "https://linkedin.com/in/johndoe",
    "portfolio": "https://johndoe.dev"
  },
  "summary": "Experienced developer with expertise in building scalable web applications.",
  "skills": ["JavaScript", "React", "Node.js", "Next.js", "Tailwind CSS"],
  "experience": [
    {
      "company": "Tech Corp",
      "role": "Frontend Developer",
      "duration": "Jan 2021 - Dec 2022",
      "responsibilities": [
        "Developed user interfaces using React and Tailwind CSS.",
        "Collaborated with backend developers to integrate APIs."
      ]
    },
    {
      "company": "Web Solutions",
      "role": "Junior Developer",
      "duration": "Jun 2019 - Dec 2020",
      "responsibilities": [
        "Maintained and enhanced legacy code.",
        "Participated in daily stand-up meetings and sprint planning."
      ]
    }
  ],
  "education": [
    {
      "institution": "University of Tech",
      "degree": "BSc in Computer Science",
      "year": "2019"
    }
  ]
}
```

### **Profile 2**

```json
{
  "name": "Michael Johnson",
  "contact": {
    "email": "michael.johnson@example.com",
    "phone": "+1 456 789 0123",
    "linkedin": "linkedin.com/in/michaeljohnson",
    "location": "Austin, TX"
  },
  "professionalSummary": "Software engineer with expertise in backend development and cloud computing, experienced in creating robust microservices.",
  "skills": ["Java", "Spring Boot", "AWS", "Kubernetes", "PostgreSQL"],
  "projects": [
    {
      "name": "Inventory Management System",
      "technologies": ["Spring Boot", "PostgreSQL", "Docker"],
      "description": "Built a system to manage inventory for retail chains, improving accuracy by 30%."
    }
  ],
  "experience": [
    {
      "title": "Backend Developer",
      "company": "CloudTech",
      "startDate": "2018",
      "endDate": "Present",
      "responsibilities": [
        "Developed scalable backend systems.",
        "Optimized cloud infrastructure to reduce costs by 20%."
      ]
    }
  ],
  "education": [
    {
      "degree": "BS Software Engineering",
      "institution": "University of Texas",
      "graduationYear": "2016",
      "gpa": "3.9"
    }
  ]
}
```

### **Profile 3**

```json
{
  "name": "Emily Davis",
  "contact": {
    "email": "emily.davis@example.com",
    "phone": "+1 567 890 1234",
    "linkedin": "linkedin.com/in/emilydavis",
    "location": "Seattle, WA"
  },
  "professionalSummary": "Front-end developer passionate about creating user-centric designs and seamless web interfaces.",
  "skills": ["HTML", "CSS", "JavaScript", "React", "Figma"],
  "projects": [
    {
      "name": "Portfolio Website",
      "technologies": ["React", "CSS", "Netlify"],
      "description": "Designed and deployed a personal portfolio showcasing design and coding skills."
    },
    {
      "name": "Task Management App",
      "technologies": ["React", "Redux"],
      "description": "Developed a task management app with drag-and-drop functionality."
    }
  ],
  "experience": [
    {
      "title": "Frontend Developer",
      "company": "Creative Designs",
      "startDate": "2020",
      "endDate": "Present",
      "responsibilities": [
        "Collaborated with designers to create intuitive interfaces.",
        "Enhanced website performance by 25% through optimization techniques."
      ]
    }
  ],
  "education": [
    {
      "degree": "BA Design and Development",
      "institution": "University of Washington",
      "graduationYear": "2018",
      "gpa": "3.7"
    }
  ]
}
```

### **Profile 4**

```json
{
  "name": "David Brown",
  "contact": {
    "email": "david.brown@example.com",
    "phone": "+1 678 901 2345",
    "linkedin": "linkedin.com/in/davidbrown",
    "location": "Boston, MA"
  },
  "professionalSummary": "DevOps engineer specializing in CI/CD pipelines, container orchestration, and infrastructure automation.",
  "skills": ["Docker", "Kubernetes", "Jenkins", "Terraform", "Python"],
  "projects": [
    {
      "name": "CI/CD Pipeline",
      "technologies": ["Jenkins", "Docker", "AWS"],
      "description": "Set up a CI/CD pipeline to automate deployments, reducing deployment time by 50%."
    }
  ],
  "experience": [
    {
      "title": "DevOps Engineer",
      "company": "Innovative Solutions",
      "startDate": "2017",
      "endDate": "Present",
      "responsibilities": [
        "Automated infrastructure provisioning using Terraform.",
        "Maintained Kubernetes clusters for production applications."
      ]
    }
  ],
  "education": [
    {
      "degree": "MS Cloud Computing",
      "institution": "MIT",
      "graduationYear": "2017",
      "gpa": "4.0"
    }
  ]
}
```

### **Profile 5**

```json
{
  "name": "Sophia Williams",
  "contact": {
    "email": "sophia.williams@example.com",
    "phone": "+1 789 012 3456",
    "linkedin": "linkedin.com/in/sophiawilliams",
    "location": "Chicago, IL"
  },
  "professionalSummary": "Data scientist with a strong background in machine learning and statistical analysis, experienced in solving complex business problems.",
  "skills": ["Python", "R", "TensorFlow", "Pandas", "SQL"],
  "projects": [
    {
      "name": "Customer Churn Prediction",
      "technologies": ["Python", "TensorFlow", "SQL"],
      "description": "Developed a machine learning model to predict customer churn with 85% accuracy."
    }
  ],
  "experience": [
    {
      "title": "Data Scientist",
      "company": "Analytics Pro",
      "startDate": "2018",
      "endDate": "Present",
      "responsibilities": [
        "Built predictive models to forecast revenue trends.",
        "Analyzed datasets to derive actionable insights."
      ]
    }
  ],
  "education": [
    {
      "degree": "PhD Data Science",
      "institution": "University of Chicago",
      "graduationYear": "2018",
      "gpa": "4.0"
    }
  ]
}
```

Replace this JSON with your own data to generate your resume.

## How to Customize

- Modify the JSON structure to fit your resume requirements.
- Update the Tailwind CSS styles for personalized design.
- Enhance the resume layout in the components.

## Exporting as PDF

The app uses **html2pdf** to export the resume as a PDF. Ensure the "Download PDF" button is functional by:

1. Verifying the browser console for errors.
2. Ensuring proper configuration of the html2pdf library.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries, reach out to:

- **Email**: tharunbalaji110@gmail.com
- **Portfolio**: [tharun-balaji.github.io/my-portfolio](https://tharun-balaji.github.io/my-portfolio/)
- **LinkedIn**: [linkedin.com/in/tharun-balaji-j-a65402260](https://www.linkedin.com/in/tharun-balaji-j-a65402260/)
