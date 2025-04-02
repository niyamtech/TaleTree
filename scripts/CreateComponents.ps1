$targetPath = "/TaleTree/app/igotcreated"

# Create the file
New-Item -ItemType File -Path $targetPath -Force

Write-Host "File 'igotcreated' created at $targetPath"
