#!/bin/bash

# Master Seeder Script for AMIK-YPAT PURWAKARTA
# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Starting System-Wide Seeding for AMIK-YPAT PURWAKARTA ===${NC}"

# Core services first
echo -e "${GREEN}1. Seeding Identity Service...${NC}"
(cd apps/identity-service && npx prisma db seed) || { echo -e "${RED}Identity Service Seeding Failed!${NC}"; exit 1; }

echo -e "${GREEN}2. Seeding Academic Service...${NC}"
(cd apps/academic-service && npx prisma db seed) || { echo -e "${RED}Academic Service Seeding Failed!${NC}"; exit 1; }

echo -e "${GREEN}3. Seeding Admission Service...${NC}"
(cd apps/admission-service && npx prisma db seed) || { echo -e "${RED}Admission Service Seeding Failed!${NC}"; exit 1; }

echo -e "${GREEN}4. Seeding Public Service (CMS)...${NC}"
(cd apps/public-service && npx prisma db seed) || { echo -e "${RED}Public Service Seeding Failed!${NC}"; exit 1; }

echo -e "${GREEN}5. Seeding Learning Service (LMS)...${NC}"
(cd apps/learning-service && npx prisma db seed) || { echo -e "${RED}Learning Service Seeding Failed!${NC}"; exit 1; }

echo -e "${BLUE}=== Seeding Completed Successfully! ===${NC}"
echo -e "You can now login with:"
echo -e "Admin: admin@ypat.ac.id / password123"
echo -e "Dosen: dosen@ypat.ac.id / password123"
echo -e "Mahasiswa: mahasiswa@ypat.ac.id / password123"
