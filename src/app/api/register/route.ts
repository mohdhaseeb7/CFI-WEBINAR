import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Local file-based database path
const dbPath = path.join(process.cwd(), "src/data/db.json");

// Ensure data folder and file exist
const ensureDbExists = () => {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([], null, 2), "utf8");
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, countryCode, qualification, goals } = body;

    if (!name || !email || !phone || !qualification) {
      return NextResponse.json(
        { error: "Name, email, phone number, and qualification are required." },
        { status: 400 }
      );
    }

    ensureDbExists();

    // Read existing database content
    const fileContent = fs.readFileSync(dbPath, "utf8");
    const registrations = JSON.parse(fileContent);

    // Check if email already registered
    const exists = registrations.some((reg: any) => reg.email === email);
    if (exists) {
      return NextResponse.json(
        { message: "You are already registered for the webinar!" },
        { status: 200 }
      );
    }

    // Save registration
    const newRegistration = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      countryCode: countryCode || "+91",
      qualification,
      goals: goals || "",
      registeredAt: new Date().toISOString(),
    };

    registrations.push(newRegistration);
    fs.writeFileSync(dbPath, JSON.stringify(registrations, null, 2), "utf8");

    return NextResponse.json(
      { message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database registration error:", error);
    return NextResponse.json(
      { error: "Failed to process registration." },
      { status: 500 }
    );
  }
}
