param (
    [string]$atom
)

$componentDir = "./src/components/$atom"

# Ensure the directory exists
New-Item -ItemType Directory -Path $componentDir -Force

# Define component content using single quotes to prevent PowerShell from expanding variables
$componentContent = @'
import React from "react";

interface COMPONENT_NAMEProps {
  children?: React.ReactNode;
}

const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default COMPONENT_NAME;
'@

# Replace placeholder with actual component name
$componentContent = $componentContent -replace "COMPONENT_NAME", $atom

# Write to the file
$componentPath = "$componentDir/$atom.tsx"
Set-Content -Path $componentPath -Value $componentContent -Encoding UTF8

Write-Output "Component '$atom' created at $componentPath"
