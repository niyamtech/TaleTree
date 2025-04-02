param (
    [string]$atom
)

$componentDir = "./src/components/$atom"

# Ensure the directory exists
New-Item -ItemType Directory -Path $componentDir -Force

# Define component content
$componentContent = @"
import React from 'react';

interface ${atom}Props {
  children?: React.ReactNode;
}

const $atom: React.FC<${atom}Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default $atom;
"@

# Write to the file
$componentPath = "$componentDir/$atom.tsx"
Set-Content -Path $componentPath -Value $componentContent -Encoding UTF8

Write-Output "Component '$atom' created at $componentPath"
