# Define the base path for components
$basePath = "./components/Atoms"

# List of Atoms components
$atoms = @("Button", "Input", "Label", "Avatar", "Icon", "Badge", "Checkbox", "Radio", "Switch", "Tooltip")

# Loop through each Atom component and create the necessary structure
foreach ($atom in $atoms) {
    $componentPath = "$basePath/$atom"
    
    # Create the component folder
    New-Item -ItemType Directory -Path $componentPath -Force

    # Create the component file
    Set-Content -Path "$componentPath/$atom.tsx" -Value @"
import React from 'react';
import styles from './$atom.module.css';

interface ${atom}Props {
  children?: React.ReactNode;
}

const $atom: React.FC<${atom}Props> = ({ children }) => {
  return <div className={styles.$( $atom.ToLower() )}>{children}</div>;
};

export default $atom;
"@

    # Create the styles file
    Set-Content -Path "$componentPath/$atom.module.css" -Value @"
.$( $atom.ToLower() ) {
  /* Add styling here */
}
"@

    # Create the index file for easy exports
    Set-Content -Path "$componentPath/index.ts" -Value @"
export { default } from './$atom';
"@
}

# Create a global index file to export all Atoms
$exportStatements = $atoms | ForEach-Object { "export { default as $_ } from './$_';" }
Set-Content -Path "$basePath/index.ts" -Value ($exportStatements -join "`n")

Write-Host "✅ Atoms folder structure created successfully!"
