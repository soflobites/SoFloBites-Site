$filePath = "C:\Users\emcub\.gemini\antigravity\scratch\soflo-bites\app.js"
$content = [System.IO.File]::ReadAllText($filePath)

# Update prices
$prices = @{
    "sweet-tomatoes" = @{ range = "$"; level = 1 }
    "la-birra-bar" = @{ range = "$"; level = 1 }
    "mister-o1" = @{ range = "$"; level = 1 }
    "pizza-lovers" = @{ range = "$$"; level = 2 }
    "blue-ginger" = @{ range = "$$"; level = 2 }
    "rosalias-kitchen" = @{ range = "$$"; level = 2 }
    "the-pub-pembroke" = @{ range = "$$"; level = 2 }
    "chugs-diner" = @{ range = "$$"; level = 2 }
    "saffrano-crepes" = @{ range = "$$"; level = 2 }
    "little-hen-weston" = @{ range = "$$"; level = 2 }
    "el-gallo-pinto" = @{ range = "$$"; level = 2 }
    "ohana-sushi" = @{ range = "$$"; level = 2 }
    "ethos-greek-bistro" = @{ range = "$$$"; level = 3 }
    "ra-sushi-bar" = @{ range = "$$$"; level = 3 }
    "embarcadero-41" = @{ range = "$$$"; level = 3 }
    "tacu-taku" = @{ range = "$$$"; level = 3 }
    "brimstone-pines" = @{ range = "$$$"; level = 3 }
    "tanuki-river-landing" = @{ range = "$$$"; level = 3 }
    "negroni-weston" = @{ range = "$$$"; level = 3 }
    "tap42-aventura" = @{ range = "$$$"; level = 3 }
    "lb-eatery" = @{ range = "$$$"; level = 3 }
    "coopers-hawk-pines" = @{ range = "$$$"; level = 3 }
    "ke-uh-weston" = @{ range = "$$$"; level = 3 }
    "cotoa" = @{ range = "$$$$"; level = 4 }
}

foreach ($id in $prices.Keys) {
    $r = $prices[$id]
    $range = $r.range
    $level = $r.level
    
    # Match: id: "id", ... priceRange: "...", priceLevel: ...
    # We escape $ in range inside double quotes by using backtick or single-quoted string
    $pattern = "(?s)(id:\s*`"$id`",.*?)priceRange:\s*`"[^`"]+`",(\s*priceLevel:\s*)\d+"
    $replacement = "`$1priceRange: `"$range`",`$2$level"
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $replacement)
}

# Update image for little-hen-weston
$content = $content.Replace('image: "images/little-hen-tea-pancakes-weston.jpg"', 'image: "images/little-hen-fried-eggs-weston.jpg"')

# Update image for the-pub-pembroke
$content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)(id:\s*`"the-pub-pembroke`",.*?image:\s*`")images/photo-coming-soon.jpg`"', '`${1}images/the-pub-sandwich-fries-pembroke-pines.jpg`"')

[System.IO.File]::WriteAllText($filePath, $content)
Write-Output "Successfully updated images and prices!"
