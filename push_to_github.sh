#!/bin/bash

# Script to push to GitHub with token authentication
# This script will prompt for GitHub username and token

echo "To push to GitHub, you need to:"
echo "1. Go to https://github.com/settings/tokens"
echo "2. Generate a new Personal Access Token with 'repo' scope"
echo "3. Copy the token"
echo ""
echo "Then run this command:"
echo "git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/viona-gencyc-spec/Futuro-Skills-Academy-Website.git main"
echo ""
echo "Or if you want to be prompted for credentials:"
echo "git push origin main"
