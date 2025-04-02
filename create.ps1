param (
    [string]$baseDir = "/workspaces/TaleTree/app/components"
)

# Define Atomic design component categories
$atoms = @("Button", "Input", "Label", "Icon")
$molecules = @("Card", "FormGroup", "InputWithLabel")
$organisms = @("Header", "Footer", "Sidebar", "NavBar")
$templates = @("HomePage", "DashboardPage")

# Function to create a component
function Create-Component($componentName, $type) {
    $componentDir = "$baseDir/$type/$componentName"

    # Ensure the directory exists
    New-Item -ItemType Directory -Path $componentDir -Force

    # Create a separate CSS file for the component
    $cssContent = @"
/* Default Tailwind styles for $componentName component */
.$componentName {
    @apply p-4 rounded-md shadow-lg bg-gray-100;
}

/* Additional customization can be added here */
"@

    # Write CSS content to the component's CSS file
    $cssPath = "$componentDir/$componentName.css"
    Set-Content -Path $cssPath -Value $cssContent -Encoding UTF8

    # Define component content with Tailwind CSS classes
    $componentContent = @"
import React from 'react';
import './$componentName.css';  # Import the component-specific Tailwind CSS styles

interface ${componentName}Props {
    children?: React.ReactNode;
}

const ${componentName}: React.FC<${componentName}Props> = ({ children }) => {
    return (
        <div className="$componentName">
            {children}
        </div>
    );
};

export default ${componentName};
"@

    # Write component content to the TypeScript file
    $componentPath = "$componentDir/$componentName.tsx"
    Set-Content -Path $componentPath -Value $componentContent -Encoding UTF8

    Write-Host "Component '$componentName' created in $type/$componentName"
}

# Create Atoms
foreach ($atom in $atoms) {
    Create-Component $atom "Atoms"
}

# Create Molecules
foreach ($molecule in $molecules) {
    Create-Component $molecule "Molecules"
}

# Create Organisms
foreach ($organism in $organisms) {
    Create-Component $organism "Organisms"
}

# Create Templates
foreach ($template in $templates) {
    Create-Component $template "Templates"
}

Write-Host "All components created successfully!"
