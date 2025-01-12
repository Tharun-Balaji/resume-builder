const templateHtml = {
  // Modern template with integrated contact info styling
  modern: btoa(`
        <div class="max-w-4xl mx-auto p-8 bg-white">
          <!-- Header section with integrated contact info -->
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
            <!-- Contact info with modern styling -->
            <div class="flex flex-wrap justify-center gap-4 text-gray-600">
              <!-- Each contact item uses consistent modern styling -->
              {email}
              {phone}
              {linkedin}
              {location}
            </div>
          </div>
          
          <!-- Rest of the sections -->
          <div class="professional-summary mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3 pb-2 border-b">Professional Summary</h2>
            <p class="text-gray-600">{summary}</p>
          </div>
          
          <div class="skills mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3 pb-2 border-b">Skills</h2>
            <div class="skills-list flex flex-wrap gap-2"></div>
          </div>
          
          <div class="projects mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3 pb-2 border-b">Projects</h2>
            <div class="projects-list space-y-4"></div>
          </div>
          
          <div class="experience mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3 pb-2 border-b">Experience</h2>
            <div class="experience-list space-y-4"></div>
          </div>
          
          <div class="education mb-8">
            <h2 class="text-2xl font-semibold text-gray-700 mb-3 pb-2 border-b">Education</h2>
            <div class="education-list space-y-4"></div>
          </div>
        </div>
      `),

  // Classic template with integrated contact info styling
  classic: btoa(`
        <div class="max-w-4xl mx-auto p-8 bg-white">
          <!-- Header with classic styling and integrated contact -->
          <div class="border-b-4 border-gray-800 mb-8">
            <h1 class="text-4xl font-serif text-gray-800 mb-4">{name}</h1>
            <!-- Contact info with classic styling -->
            <div class="flex flex-wrap gap-4 text-gray-600 mb-4">
              <!-- Each contact item uses consistent classic styling -->
              {email}
              {phone}
              {linkedin}
              {location}
            </div>
          </div>
          
          <!-- Rest of the sections -->
          <div class="professional-summary mb-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-4 uppercase">Professional Summary</h2>
            <p class="text-gray-700 leading-relaxed">{summary}</p>
          </div>
          
          <div class="experience mb-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-4 uppercase">Professional Experience</h2>
            <div class="experience-list space-y-6"></div>
          </div>
          
          <div class="skills mb-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-4 uppercase">Technical Skills</h2>
            <div class="skills-list flex flex-wrap gap-2"></div>
          </div>
          
          <div class="projects mb-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-4 uppercase">Notable Projects</h2>
            <div class="projects-list space-y-4"></div>
          </div>
          
          <div class="education mb-8">
            <h2 class="text-2xl font-serif font-bold text-gray-800 mb-4 uppercase">Education</h2>
            <div class="education-list space-y-4"></div>
          </div>
        </div>
      `),

  // Minimal template with integrated contact info styling
  minimal: btoa(`
        <div class="max-w-4xl mx-auto p-8 bg-white">
          <!-- Header with minimal styling and integrated contact -->
          <div class="mb-12">
            <h1 class="text-3xl font-light text-gray-800 mb-4">{name}</h1>
            <!-- Contact info with minimal styling -->
            <div class="flex flex-wrap gap-4 text-gray-500">
              <!-- Each contact item uses consistent minimal styling -->
              {email}
              {phone}
              {linkedin}
              {location}
            </div>
          </div>
          
          <!-- Rest of the sections -->
          <div class="professional-summary mb-12">
            <h2 class="text-lg font-medium text-gray-800 mb-3">About</h2>
            <p class="text-gray-600 leading-relaxed">{summary}</p>
          </div>
          
          <div class="experience mb-12">
            <h2 class="text-lg font-medium text-gray-800 mb-6">Experience</h2>
            <div class="experience-list space-y-8"></div>
          </div>
          
          <div class="projects mb-12">
            <h2 class="text-lg font-medium text-gray-800 mb-6">Projects</h2>
            <div class="projects-list space-y-6"></div>
          </div>
          
          <div class="skills mb-12">
            <h2 class="text-lg font-medium text-gray-800 mb-4">Skills</h2>
            <div class="skills-list flex flex-wrap gap-2"></div>
          </div>
          
          <div class="education mb-8">
            <h2 class="text-lg font-medium text-gray-800 mb-4">Education</h2>
            <div class="education-list space-y-4"></div>
          </div>
        </div>
      `),
};

export default templateHtml;