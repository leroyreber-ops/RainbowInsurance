#!/bin/bash

# Define the files to process
FILES=$(find src/pages src/components -name "*.tsx")

for FILE in $FILES; do
  # Replace Sonja with Sonia
  sed -i 's/Sonja/Sonia/g' "$FILE"
  
  # Replace the old team list with the new one
  # Susan, Sonia, Elaine, and Holly -> Susan, Sonia, Elaine, Joanna, Julie, Dominique, and Holly
  sed -i 's/Susan, Sonia, Elaine, and Holly/Susan, Sonia, Elaine, Joanna, Julie, Dominique, and Holly/g' "$FILE"
  
  # Sonia, Elaine, and Holly -> Sonia, Elaine, Joanna, Julie, Dominique, and Holly
  sed -i 's/Sonia, Elaine, and Holly/Sonia, Elaine, Joanna, Julie, Dominique, and Holly/g' "$FILE"
  
  # Handle the specific list in Testimonials.tsx if it exists
  sed -i 's/Susan, Sonia, Elaine, Holly, Dominique, Julia, and Joanna/Susan, Sonia, Elaine, Joanna, Julie, Dominique, and Holly/g' "$FILE"
  sed -i 's/Susan, Sonia, Elaine, Holly, Dominique, Julie, and Joanna/Susan, Sonia, Elaine, Joanna, Julie, Dominique, and Holly/g' "$FILE"
done
