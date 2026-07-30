$content = Get-Content -Raw -Path "C:\Users\emcub\.gemini\antigravity\scratch\soflo-bites\app.js"
$lines = $content -split "`r?`n"

$restaurants = [System.Collections.Generic.List[PSObject]]::new()
$current = $null

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    $lineNum = $i + 1
    
    if ($line -match 'id:\s*"([^"]+)"') {
        if ($current -ne $null) {
            $restaurants.Add($current)
        }
        $current = [PSCustomObject]@{
            Id = $Matches[1]
            PriceRange = ""
            PriceLevel = 0
            Image = ""
        }
    }
    
    if ($current -ne $null) {
        if ($line -match 'priceRange:\s*"([^"]+)"') {
            $current.PriceRange = $Matches[1]
        }
        if ($line -match 'priceLevel:\s*(\d+)') {
            $current.PriceLevel = [int]$Matches[1]
        }
        if ($line -match 'image:\s*"([^"]+)"') {
            $current.Image = $Matches[1]
        }
    }
}
if ($current -ne $null) {
    $restaurants.Add($current)
}

foreach ($r in $restaurants) {
    if ($r.Id) {
        Write-Output "ID: $($r.Id) | Price: $($r.PriceRange) (Level: $($r.PriceLevel)) | Image: $($r.Image)"
    }
}
