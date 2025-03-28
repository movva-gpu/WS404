#!/bin/bash

# Function to convert PNG to WEBP
convert_png_to_webp() {
    for file in "$1"/*.png; do
        if [ -f "$file" ]; then
            magick convert "$file" "${file%.png}.webp"
        fi
    done
}

# Export the function for subshells
export -f convert_png_to_webp

# Find all directories and apply the conversion function
find . -type d -exec bash -c 'convert_png_to_webp "$0"' {} \;
