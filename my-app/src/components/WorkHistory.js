import React from "react";

export default function WorkHistory() {
    return(
        <section section id="bio" className="flex-direction: column min-h-screen md:min-h-1200">
        {/* Left Section (Title & Text) */}
        <div className="md:w-1/2 w-full md:ml-[15em] sm:text-center md:text-left md:pt-12">
            <h1 className="text-2xl font-bold text-[#D2931B]"> Software Developer Contract</h1>
            <p className="fst-italic font-bold font-italic md:pb-1">Oshkosh Corporation</p>
            <p className="text-md" style={{ fontFamily: "Inconsolata" }}>
            • Oversaw the deployment of C# and .NET projects to production in UiPath, managing dependencies, path mapping, and file
 transfers to ensure successful production code releases
 <br></br>• Diagnosed and resolved production Python and .NET code failures on production deployments within 24 hours, successfully
 using agile methodologies to ensure solution with end user acceptance testing
 <br></br>• Examined software bugs and outages across the company with Visual Studio, Adobe Suite, Microsoft Suite, SQL databases,
 AWS servers, and web applications using automation charts and ServiceNow, successfully resolving over 400 incidents
            </p>
        </div>
        <div className="md:end-10 md:w-1/3 w-full md:ml-[60em] sm:text-center md:text-left md:p-8">
            <h1 className="text-2xl font-bold text-[#D2931B]">Test</h1>
            <p className="fst-italic font-bold font-italic md:pb-1">Oshkosh Corporation</p>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            • Utilized Azure DevOps CI/CD Pipelines, managing 10+ user stories, and Agile methodologies to improve project delivery
 and ensured accurate delivery with test driven development<br></br>• Developed automations integrating C#, .NET, Python, and REST APIs in scripts, reducing manual labor by 2,000 hours
 <br></br>• Optimized automations using AI Computer Vision, Machine Learning, and OCR using UiPath and the .NET Stack, moving
 projects through the SLDC and confirming success with user acceptance testing
 <br></br>• Maintained and documented codebases with Git in the production GitHub repositories, using SharePoint and Azure for
 seamless developer collaboration and documentation
            </p>
        </div>
        <div className="md:w-1/2 w-full md:ml-[15em] sm:text-center md:text-left md:p-8">
            <h1 className="text-2xl font-bold text-[#D2931B]"> Software Developer Intern</h1>
            <p className="fst-italic font-bold font-italic md:pb-1">Ziing Final Mile</p>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            • Engineered ETL workflows using VBA to process and parse raw SQL datasets into structured financial reports in Excel, assisting with the financial data analysis of a rapidly growing startup
 <br></br>• Conducted daily peer code reviews to ensure code quality, completeness, and security, in daily meetings with developers
 enhancing production code practices and maintaining code standards across the team
            </p>
        </div>
        <div className="md:end-10 md:w-1/3 w-full md:ml-[60em] sm:text-center md:text-left md:pb-12">
            <h1 className="text-2xl font-bold text-[#D2931B]"> Undergraduate Research</h1>
            <p className="fst-italic font-bold font-italic md:pb-1">Wilfrid Laurier University</p>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            • Utilized parallel programming techniques in C, including multi-threading to solve complex big data problems
<br></br>• Developed efficient Python algorithms to process large datasets, enhancing data analysis capabilities
<br></br>• Researched and implemented advanced algorithms for Hadamard matrix computation, optimizing performance and accuracy
            </p>
        </div>

        </section>
    );
}