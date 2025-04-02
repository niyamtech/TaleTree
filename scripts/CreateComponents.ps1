param (
    [string]$componentName = "Button"
)

$componentDir = "/workspaces/TaleTree/app/src/components/$componentName"

# Ensure the directory exists
New-Item -ItemType Directory -Path $componentDir -Force

# Define component content using single quotes to prevent PowerShell from expanding variables
$componentContent = @'
import React from "react";

interface COMPONENT_NAMEProps {
  children?: React.ReactNode;
}

const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default COMPONENT_NAME;
'@

# Replace placeholder with actual component name
$componentContent = $componentContent -replace "COMPONENT_NAME", $componentName

# Write to the file
$componentPath = "$componentDir/$componentName.tsx"
Set-Content -Path $componentPath -Value $componentContent -Encoding UTF8

Write-Output "Component '$componentName' created at $componentPath"
