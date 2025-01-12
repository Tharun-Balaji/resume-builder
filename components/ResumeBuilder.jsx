"use client";

import React, { Component } from "react";
import Card from "./Card";
import templateHtml from "./templates";

/**
 * ResumeBuilder is a component that takes in resume data and renders a resume
 * based on a template. It uses a template string to generate the HTML, and
 * replaces template variables with the actual data.
 */
class ResumeBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			template: props.defaultTemplate || "modern",
			renderedContent: null,
		};

		// Create a ref to store the template container
		this.templateRef = React.createRef();
	}

	/**
	 * componentDidMount is a lifecycle method that is called after the component
	 * has mounted. We use it to process the template and generate the rendered
	 * content.
	 */
	componentDidMount() {
		// Processing the template after the component mounts ensures that the DOM is available.
		this.processTemplate();
	}

	/**
	 * componentDidUpdate is a lifecycle method that is called whenever the
	 * component's props or state change. We use it to re-process the template if the
	 * resume data or default template changes.
	 */
	componentDidUpdate(prevProps) {
		if (
			prevProps.resumeData !== this.props.resumeData ||
			prevProps.defaultTemplate !== this.props.defaultTemplate
		) {
			this.processTemplate();
		}
	}

	/**
	 * getContactInfoPlaceholders is a helper method that generates contact info
	 * HTML that matches each template's style.
	 */
	getContactInfoPlaceholders(contact) {
		const contactPlaceholders = {
			email: contact.email
				? `
        <div class="flex items-center gap-2">
          <span class="text-sm">📧</span>
          ${contact.email}
        </div>
      `
				: "",
			phone: contact.phone
				? `
        <div class="flex items-center gap-2">
          <span class="text-sm">📱</span>
          ${contact.phone}
        </div>
      `
				: "",
			linkedin: contact.linkedin
				? `
        <div class="flex items-center gap-2">
          <span class="text-sm">💼</span>
          ${contact.linkedin}
        </div>
      `
				: "",
			location: contact.location
				? `
        <div class="flex items-center gap-2">
          <span class="text-sm">📍</span>
          ${contact.location}
        </div>
      `
				: "",
		};

		return contactPlaceholders;
	}

	/**
	 * populateSection is a helper method that populates sections using the
	 * template container.
	 */
	populateSection(container, selector, items, renderFunction) {
		const section = container.querySelector(selector);
		if (section) {
			section.innerHTML = items.map(renderFunction).join("");
		}
	}

	/**
	 * processTemplate is a method that processes the template and generates the
	 * rendered content.
	 */
	processTemplate() {
		const { resumeData } = this.props;
		const template = templateHtml[this.props.defaultTemplate];

		if (!template) {
			this.setState({
				renderedContent: "<div>Error loading template</div>",
			});
			return;
		}

		// Create a temporary container
		const tempContainer = document.createElement("div");
		tempContainer.innerHTML = atob(template);

		// Get contact placeholders based on the data
		const contactPlaceholders = this.getContactInfoPlaceholders(
			resumeData.contact
		);

		// Replace all template variables including contact info
		tempContainer.innerHTML = tempContainer.innerHTML
			.replace("{name}", resumeData.name)
			.replace("{summary}", resumeData.professionalSummary)
			.replace("{email}", contactPlaceholders.email)
			.replace("{phone}", contactPlaceholders.phone)
			.replace("{linkedin}", contactPlaceholders.linkedin)
			.replace("{location}", contactPlaceholders.location);

		// Populate the rest of the sections
		this.populateSection(
			tempContainer,
			".skills-list",
			resumeData.skills,
			this.renderSkill
		);
		this.populateSection(
			tempContainer,
			".projects-list",
			resumeData.projects,
			this.renderProject
		);
		this.populateSection(
			tempContainer,
			".experience-list",
			resumeData.experience,
			this.renderExperience
		);
		this.populateSection(
			tempContainer,
			".education-list",
			resumeData.education,
			this.renderEducation
		);

		// Update the state with the processed content
		this.setState({ renderedContent: tempContainer.innerHTML });
	}

	/**
	 * render methods remain the same
	 */
	renderSkill = (skill) => `
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${skill}</span>
  `;

	renderProject = (project) => `
    <div class="mb-4">
      <h3 class="text-xl font-semibold text-gray-700">${project.name}</h3>
      <div class="flex flex-wrap gap-2 my-2">
        ${project.technologies
			.map(
				(tech) => `
          <span class="px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded">${tech}</span>
        `
			)
			.join("")}
      </div>
      <p class="text-gray-600">${project.description}</p>
    </div>
  `;

	renderExperience = (exp) => `
    <div class="mb-4">
      <div class="flex justify-between items-baseline mb-2">
        <h3 class="text-xl font-semibold text-gray-700">${exp.title}</h3>
        <span class="text-gray-500 text-sm">${exp.startDate} - ${
		exp.endDate
	}</span>
      </div>
      <p class="text-gray-600 font-medium mb-2">${exp.company}</p>
      <ul class="list-disc list-inside text-gray-600">
        ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
      </ul>
    </div>
  `;

	renderEducation = (edu) => `
    <div class="mb-4">
      <div class="flex justify-between items-baseline mb-2">
        <h3 class="text-xl font-semibold text-gray-700">${edu.degree}</h3>
        <span class="text-gray-500 text-sm">${edu.graduationYear}</span>
      </div>
      <p class="text-gray-600 font-medium">${edu.institution}</p>
      ${edu.gpa ? `<p class="text-gray-600">GPA: ${edu.gpa}</p>` : ""}
    </div>
  `;

	render() {
		return (
			<Card className="w-full shadow-lg">
				{this.state.renderedContent && (
					<div
						ref={this.templateRef}
						dangerouslySetInnerHTML={{
							__html: this.state.renderedContent,
						}}
					/>
				)}
			</Card>
		);
	}
}

export default ResumeBuilder;
