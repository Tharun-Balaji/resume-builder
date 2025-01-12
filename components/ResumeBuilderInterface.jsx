import React, { Component } from "react";
import { AlertCircle, Check, Download } from "lucide-react";
import ResumeBuilder from "./ResumeBuilder";

const initialResumeData = {
	name: "John Doe",
	contact: {
		email: "john@example.com",
		phone: "+1 234 567 8900",
		linkedin: "linkedin.com/in/johndoe",
		location: "New York, NY",
	},
	professionalSummary: "Experienced software engineer...",
	skills: ["JavaScript", "React", "Node.js"],
	projects: [
		{
			name: "Project Name",
			technologies: ["React", "Node.js"],
			description: "Project description...",
		},
	],
	experience: [
		{
			title: "Software Engineer",
			company: "Tech Corp",
			startDate: "2020",
			endDate: "Present",
			responsibilities: ["Led development...", "Managed team..."],
		},
	],
	education: [
		{
			degree: "BS Computer Science",
			institution: "University",
			graduationYear: "2018",
			gpa: "3.8",
		},
	],
};

class ResumeBuilderInterface extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonInput: JSON.stringify(initialResumeData, null, 2),
			// jsonInput: "",
			resumeData: initialResumeData,
			error: null,
			template: "modern",
			status: "",
			isGeneratingPDF: false,
		};
		this.resumeRef = React.createRef();
	}

	componentDidMount() {
		// Load html2pdf.js script dynamically
		const script = document.createElement("script");
		script.src =
			"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
		script.async = true;
		document.body.appendChild(script);
	}

	handleJsonChange = (e) => {
		const newJsonInput = e.target.value;
		this.setState({ jsonInput: newJsonInput });

		try {
			const parsedData = JSON.parse(newJsonInput);
			this.setState(
				{
					resumeData: parsedData,
					error: null,
					status: "Valid JSON ✓",
				},
				() => {
					setTimeout(() => this.setState({ status: "" }), 2000);
				}
			);
		} catch (err) {
			this.setState({
				error: "Invalid JSON format",
				status: "",
			});
		}
	};

	handleTemplateChange = (e) => {
		this.setState({ template: e.target.value });
	};

	handleDownloadPDF = async () => {
		// Check if html2pdf is loaded
		if (typeof html2pdf === "undefined") {
			alert(
				"PDF generator is still loading. Please try again in a moment."
			);
			return;
		}

		this.setState({ isGeneratingPDF: true });

		try {
			const element = this.resumeRef.current;
			const opt = {
				margin: 10,
				filename: `${this.state.resumeData.name.replace(
					/\s+/g,
					"_"
				)}_resume.pdf`,
				image: { type: "jpeg", quality: 0.98 },
				html2canvas: {
					scale: 2,
					useCORS: true,
					logging: false,
				},
				jsPDF: {
					unit: "mm",
					format: "a4",
					orientation: "portrait",
				},
			};

			await html2pdf().set(opt).from(element).save();
		} catch (error) {
			console.error("PDF generation failed:", error);
			alert("Failed to generate PDF. Please try again.");
		}

		this.setState({ isGeneratingPDF: false });
	};

	render() {
		const {
			jsonInput,
			resumeData,
			error,
			template,
			status,
			isGeneratingPDF,
		} = this.state;

		return (
			<div className="flex flex-col md:flex-row h-screen bg-gray-500">
				{/* Left Panel - JSON Input */}
				<div className="w-full md:w-1/2 p-4 bg-white shadow-md overflow-auto">
					<div className="mb-4">
						<label className="block text-sm text-black font-medium mb-2">
							Choose Template
						</label>
						<select
							value={template}
							onChange={this.handleTemplateChange}
							className="w-full p-2 border rounded-md bg-white text-black"
						>
							<option value="modern">Modern</option>
							<option value="classic">Classic</option>
							<option value="minimal">Minimal</option>
						</select>
					</div>

					<div className="mb-4">
						<label className="block text-sm text-black font-medium mb-2">
							Resume JSON
							{status && (
								<span className="ml-2 text-green-600 inline-flex items-center">
									<Check size={16} className="mr-1" />
									{status}
								</span>
							)}
							{error && (
								<span className="ml-2 text-red-600 inline-flex items-center">
									<AlertCircle size={16} className="mr-1" />
									{error}
								</span>
							)}
						</label>
						<textarea
							value={jsonInput}
							onChange={this.handleJsonChange}
							className="w-full h-[calc(100vh-200px)] p-4 text-black font-mono text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Paste your resume JSON here..."
						/>
					</div>
				</div>

				{/* Right Panel - Resume Preview */}
				<div className="w-full md:w-1/2 p-4 bg-gray-100 overflow-auto">
					<div className="mb-4 flex justify-end">
						<button
							onClick={this.handleDownloadPDF}
							disabled={isGeneratingPDF || error}
							className={`flex items-center px-4 py-2 rounded-md text-white ${
								isGeneratingPDF || error
									? "bg-gray-400 cursor-not-allowed"
									: "bg-blue-600 hover:bg-blue-700"
							}`}
						>
							<Download size={16} className="mr-2" />
							{isGeneratingPDF
								? "Generating PDF..."
								: "Download PDF"}
						</button>
					</div>
					<div
						ref={this.resumeRef}
						className="bg-white shadow-md rounded-lg overflow-hidden"
					>
						{error ? (
							<div className="p-4 text-red-600">
								<AlertCircle className="inline mr-2" />
								Please fix the JSON format errors to see the
								preview
							</div>
						) : (
							<ResumeBuilder
								resumeData={resumeData}
								defaultTemplate={template}
								onError={(err) =>
									this.setState({ error: err.message })
								}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default ResumeBuilderInterface;
