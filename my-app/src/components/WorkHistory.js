import React from "react";

export default function WorkHistory() {
    return(
        <section section id="bio" className="flex-direction: column">
        {/* Left Section (Title & Text) */}
        <div className="md:w-1/2 w-full ml-[10em] sm:text-center md:text-left md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold text-[#D2931B]"> Software Developer Contract</h1>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            • Oversaw the deployment of C# and .NET projects to production in UiPath, managing dependencies, path mapping, and file
 transfers to ensure successful production code releases
 <br></br>• Diagnosed and resolved production Python and .NET code failures on production deployments within 24 hours, successfully
 using agile methodologies to ensure solution with end user acceptance testing
 <br></br>• Examined software bugs and outages across the company with Visual Studio, Adobe Suite, Microsoft Suite, SQL databases,
 AWS servers, and web applications using automation charts and ServiceNow, successfully resolving over 400 incidents
            </p>
        </div>
        <div className="md:w-3/4 w-full ml-[10em] sm:text-center md:text-right md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold text-[#D2931B]">Test</h1>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            More job information
            </p>
        </div>
        <div className="md:w-3/4 w-full ml-[10em] sm:text-center md:text-left md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold text-[#D2931B]">Test</h1>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            More job information
            </p>
        </div>
        <div className="md:w-3/4 w-full ml-[10em] sm:text-center md:text-right md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold text-[#D2931B]">Test</h1>
            <p className="text-lg" style={{ fontFamily: "Inconsolata" }}>
            More job information
            </p>
        </div>

        </section>
    );
}